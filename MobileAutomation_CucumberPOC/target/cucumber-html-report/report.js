$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/AppLogin.feature");
formatter.feature({
  "name": "Login on Myntra App",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Successful login with Valid Credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "User is on Myntra Home Page",
  "keyword": "Given "
});
formatter.step({
  "name": "User clicks the Login button and enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User Should be able to login",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "Rashikas331@gmail.com",
        "Demo@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Successful login with Valid Credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Myntra Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "AppLoginStep.user_is_on_Myntra_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the Login button and enters \"Rashikas331@gmail.com\" and \"Demo@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "AppLoginStep.user_clicks_the_Login_button_and_enters_and(String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: An unknown server-side error occurred while processing the command. Original error: Could not proxy command to remote server. Original error: Error: socket hang up\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027COMPAQ\u0027, ip: \u0027172.20.10.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.1\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: E:\\MobileAutomation_Cucumbe..., appActivity: com.myntra.android.activiti..., appPackage: com.myntra.android, automationName: Appium, databaseEnabled: false, desired: {app: E:\\MobileAutomation_Cucumbe..., appActivity: com.myntra.android.activiti..., appPackage: com.myntra.android, automationName: Appium, deviceName: 21398fbc06057ece, platformName: android, platformVersion: 10.0}, deviceApiLevel: 29, deviceManufacturer: samsung, deviceModel: SM-G960F, deviceName: 21398fbc06057ece, deviceScreenDensity: 640, deviceScreenSize: 1440x2960, deviceUDID: 21398fbc06057ece, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, pixelRatio: 4, platform: LINUX, platformName: Android, platformVersion: 10, statBarHeight: 96, takesScreenshot: true, viewportRect: {height: 2672, left: 0, top: 96, width: 1440}, warnings: {}, webStorageEnabled: false}\nSession ID: 654de551-9bf1-4e48-92a2-fd056d7544d5\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat io.appium.java_client.DefaultGenericMobileElement.execute(DefaultGenericMobileElement.java:45)\r\n\tat io.appium.java_client.MobileElement.execute(MobileElement.java:1)\r\n\tat io.appium.java_client.android.AndroidElement.execute(AndroidElement.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat steps.AppLoginStep.user_clicks_the_Login_button_and_enters_and(AppLoginStep.java:56)\r\n\tat ✽.User clicks the Login button and enters \"Rashikas331@gmail.com\" and \"Demo@123\"(file:src/test/resources/features/AppLogin.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User Should be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "AppLoginStep.user_Should_be_able_to_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.WebDriverException: An unknown server-side error occurred while processing the command. Original error: Error executing adbExec. Original error: \u0027Command \u0027C:\\\\Users\\\\Rubi\\\\AppData\\\\Local\\\\Android\\\\Sdk\\\\platform-tools\\\\adb.exe -P 5037 -s 21398fbc06057ece shell settings delete global hidden_api_policy_pre_p_apps\u0027 exited with code 1\u0027; Stderr: \u0027adb.exe: device unauthorized.\r\nThis adb server\u0027s $ADB_VENDOR_KEYS is not set\r\nTry \u0027adb kill-server\u0027 if that seems wrong.\r\nOtherwise check for a confirmation dialog on your device.\u0027; Code: \u00271\u0027\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027COMPAQ\u0027, ip: \u0027172.20.10.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.1\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: E:\\MobileAutomation_Cucumbe..., appActivity: com.myntra.android.activiti..., appPackage: com.myntra.android, automationName: Appium, databaseEnabled: false, desired: {app: E:\\MobileAutomation_Cucumbe..., appActivity: com.myntra.android.activiti..., appPackage: com.myntra.android, automationName: Appium, deviceName: 21398fbc06057ece, platformName: android, platformVersion: 10.0}, deviceApiLevel: 29, deviceManufacturer: samsung, deviceModel: SM-G960F, deviceName: 21398fbc06057ece, deviceScreenDensity: 640, deviceScreenSize: 1440x2960, deviceUDID: 21398fbc06057ece, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, pixelRatio: 4, platform: LINUX, platformName: Android, platformVersion: 10, statBarHeight: 96, takesScreenshot: true, viewportRect: {height: 2672, left: 0, top: 96, width: 1440}, warnings: {}, webStorageEnabled: false}\nSession ID: 654de551-9bf1-4e48-92a2-fd056d7544d5\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:45)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.quit(RemoteWebDriver.java:452)\r\n\tat steps.AppLoginStep.TearDown(AppLoginStep.java:41)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:50)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
});