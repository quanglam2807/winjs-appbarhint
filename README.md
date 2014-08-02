winjs-appbarhint
================

Windows 8 AppBar Hint control for WinJS.

Screenshot and C# version of this AppBarHint control:
http://code.msdn.microsoft.com/windowsapps/AppBar-Hint-control-17e23dbf

###Required references
```html:default.html
<!-- You must add these references to your default.html -->
<link href="css/appbarhint.css" rel="stylesheet" />
<script src="/js/appbarhint.js"></script>
```

###Properties
* *refreshing* (string) // REQUIRED: ID of the appbar
* *extraClass* (string): Extra classes applied to the control
* *color* (string): Color of appbar hint

###Example
```html:default.html
    <div data-win-control="NhutQuang97.AppbarHint.WinJS" data-win-options="{appbarid: 'appbar', color:'#e51c23'}"></div>
    <div id="appbar" data-win-control="WinJS.UI.AppBar">
    </div>
```
