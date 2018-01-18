package com.reactnativenavigation.playground;

import android.support.annotation.Nullable;

import com.facebook.react.ReactPackage;
import com.reactnativenavigation.NavigationApplication;
import com.wix.interactable.Interactable;

import java.util.ArrayList;
import java.util.List;

public class MainApplication extends NavigationApplication {

    @Override
    public boolean isDebug() {
        return BuildConfig.DEBUG;
    }

    @Nullable
    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
        ArrayList<ReactPackage> objects = new ArrayList<>();
        objects.add(new Interactable());
        return objects;
    }
}
