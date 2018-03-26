//
//  RNNTitleViewHelper.h
//  ReactNativeNavigation
//
//  Created by Yogev Ben David on 22/03/2018.
//  Copyright © 2018 Wix. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

@interface RNNTitleView : UIView

@property (nonatomic, strong) UILabel *titleLabel;

@property (nonatomic, strong) UILabel *subtitleLabel;

@end

@interface RNNTitleViewHelper : NSObject


- (instancetype)init:(UIViewController*)viewController
			   title:(NSString*)title subtitle:(NSString*)subtitle
	  titleImageData:(id)titleImageData
	   isSetSubtitle:(BOOL)isSetSubtitle;

-(void)setup:(NSDictionary*)style;

@end

