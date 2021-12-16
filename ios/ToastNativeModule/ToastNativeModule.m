//
//  ToastNativeModule.m
//  VentiveTestTask
//
//  Created by Hassan Wali on 12/16/21.
//

#import <Foundation/Foundation.h>
#import "ToastNativeModule.h"

@implementation ToastNativeModule

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(showNativeToast:(NSString *)message)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", message);
  
//  UIAlertView *toast = [[UIAlertView alloc] initWithTitle:nil
//                                                  message:message
//                                                 delegate:nil
//                                        cancelButtonTitle:nil
//                                        otherButtonTitles:nil, nil];
//  [toast show];
//
//  int duration = 1; // duration in seconds
//
//  dispatch_after(dispatch_time(DISPATCH_TIME_NOW, duration * NSEC_PER_SEC), dispatch_get_main_queue(), ^{
//    [toast dismissWithClickedButtonIndex:0 animated:YES];
//  });
}

@end
