package com.ventivetesttask;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import android.widget.Toast;

public class ToastNativeModule extends ReactContextBaseJavaModule {

    ReactContext context;
    ToastNativeModule(ReactApplicationContext context) {
        super(context);
        this.context=context;
    }

    @Override
    public String getName() {
        return "ToastNativeModule";
    }

    @ReactMethod
    public void showNativeToast(String message) {
        Toast.makeText(context, message, Toast.LENGTH_SHORT).show();
    }
}

