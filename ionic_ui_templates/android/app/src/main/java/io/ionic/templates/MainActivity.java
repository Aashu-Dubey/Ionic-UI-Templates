package io.ionic.templates;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    registerPlugin(StatusBarHeight.class);
    super.onCreate(savedInstanceState);
  }
}
