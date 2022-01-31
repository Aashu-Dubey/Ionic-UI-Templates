package io.ionic.templates;

import android.content.res.Resources;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "StatusBarAndroid")
public class StatusBarHeight extends Plugin {

  @PluginMethod()
  public void getHeight(PluginCall call) {
    Resources res = getActivity().getApplicationContext().getResources();
    int statusBarHeight;
    int resourceId = res.getIdentifier("status_bar_height", "dimen","android");
    if (resourceId > 0) {
      statusBarHeight = res.getDimensionPixelSize(resourceId);
      JSObject ret = new JSObject();
      ret.put("height", statusBarHeight);
      call.resolve(ret);
    } else {
      call.reject("Status bar height not obtained");
    }
  }
}
