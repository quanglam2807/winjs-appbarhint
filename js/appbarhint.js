(function () {
    "use strict";

    var appbarid;

    var controlClass = WinJS.Class.define(
            function Control_ctor(element, options) {
                this.element = element || document.createElement("div");
                this.element.winControl = this;

                this._color = 'red';
                this._extraClass = "";
                this.element.style.backgroundColor = this._color;

                WinJS.Utilities.addClass(this.element, "appbar-hint");

                if (options && options.appbarid) {
                    appbarid = options.appbarid;
                    this.element.addEventListener("click", this._ToggleAppbar);
                }
                else {
                    throw "Please add appbarid property";
                }

                WinJS.UI.setOptions(this, options);
            },
            {
                _ToggleAppbar: function () {
                    var appBar = document.getElementById(appbarid).winControl;
                    if (appBar.hidden)
                        appBar.show();
                    else
                        appBar.hide();
                },
                

                color: {
                    get: function () {
                        return this._color;
                    },

                    set: function (value) {
                        this._color = value;
                        this.element.style.backgroundColor = this._color;
                    }
                },

                extraClass: {
                    get: function () {
                        return this._extraClass;
                    },
                    set: function (value) {
                        if (this._extraClass) {
                            WinJS.Utilities.removeClass(this.element, this.extraClass);
                        }
                        this._extraClass = value;
                        WinJS.Utilities.addClass(this.element, this._extraClass);
                    }
                }
            }
            );
			
    WinJS.Namespace.define("NhutQuang97.AppbarHint", {
        WinJS: controlClass
    });
	
})();