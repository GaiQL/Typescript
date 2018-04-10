System.register(["./export", "url"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var export_1, cadence, star, URL, myUrl;
    return {
        setters: [
            function (export_1_1) {
                export_1 = export_1_1;
            },
            function (URL_1) {
                URL = URL_1;
            }
        ],
        execute: function () {
            cadence = (function () {
                function cadence() {
                }
                cadence.prototype.join = function (spring, winter) {
                    console.log();
                    return '123';
                };
                return cadence;
            }());
            star = new cadence();
            star.join('123', '321');
            console.log(star);
            console.log(export_1.heihei);
            myUrl = URL.parse("http://www.typescriptlang.org");
            console.log(myUrl);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1wb3J0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbW9kdWxlL2ltcG9ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztZQWNBO2dCQUFBO2dCQUtBLENBQUM7Z0JBSkMsc0JBQUksR0FBSixVQUFNLE1BQVUsRUFBQyxNQUFhO29CQUM1QixPQUFPLENBQUMsR0FBRyxFQUFJLENBQUM7b0JBQ2hCLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQ2YsQ0FBQztnQkFDSCxjQUFDO1lBQUQsQ0FBQyxBQUxELElBS0M7WUFJRyxJQUFJLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsSUFBSSxDQUFFLEtBQUssRUFBQyxLQUFLLENBQUUsQ0FBQztZQUN6QixPQUFPLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBRSxDQUFDO1lBR3BCLE9BQU8sQ0FBQyxHQUFHLENBQUUsZUFBTSxDQUFFLENBQUM7WUE0QmxCLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUM7WUFFdkQsT0FBTyxDQUFDLEdBQUcsQ0FBRSxLQUFLLENBQUUsQ0FBQztRQXdDckIsQ0FBQyJ9