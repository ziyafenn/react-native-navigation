package com.reactnativenavigation.anim;


import android.view.View;

import com.reactnativenavigation.interfaces.ScrollEventListener;
import com.reactnativenavigation.views.toptabs.TopTabs;

public class TopTabsCollapseBehavior implements ScrollEventListener.OnScrollListener, ScrollEventListener.OnDragListener {
    private TopTabs topTabs;
    private ScrollEventListener scrollEventListener;
    private TopTabsAnimator animator;

    public TopTabsCollapseBehavior(TopTabs topTabs) {
        this.topTabs = topTabs;
        this.animator = new TopTabsAnimator(topTabs);
    }

    public void enableCollapse(ScrollEventListener scrollEventListener) {
        this.scrollEventListener = scrollEventListener;
        this.scrollEventListener.register(topTabs, this, this);
    }

    public void disableCollapse() {
        if (scrollEventListener != null) {
            scrollEventListener.unregister();
            topTabs.setVisibility(View.VISIBLE);
            topTabs.setTranslationY(0);
        }
    }

    @Override
    public void onScrollUp(float nextTranslation) {
        final int measuredHeight = topTabs.getMeasuredHeight();
        if (nextTranslation < -measuredHeight && topTabs.getVisibility() == View.VISIBLE) {
            topTabs.setVisibility(View.GONE);
            topTabs.setTranslationY(-measuredHeight);
        } else if (nextTranslation > -measuredHeight && nextTranslation <= 0) {
            topTabs.setTranslationY(nextTranslation);
        }
    }

    @Override
    public void onScrollDown(float nextTranslation) {
        final int measuredHeight = topTabs.getMeasuredHeight();
        if (topTabs.getVisibility() == View.GONE && nextTranslation > -measuredHeight) {
            topTabs.setVisibility(View.VISIBLE);
            topTabs.setTranslationY(nextTranslation);
        } else if (nextTranslation <= 0 && nextTranslation >= -measuredHeight) {
            topTabs.setTranslationY(nextTranslation);
        }
    }

    @Override
    public void onShow() {
        animator.show(topTabs.getTranslationY());
    }

    @Override
    public void onHide() {
        animator.hide(topTabs.getTranslationY());
    }
}
