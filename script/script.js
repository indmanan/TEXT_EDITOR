// JavaScript Document
var bold = document.getElementById("bol");
bold.onclick = function()
{
	"use strict";
	document.execCommand("bold");
};
var italic = document.getElementById("ita");
italic.onclick = function()
{
	"use strict";
	document.execCommand("italic");
};
var underline = document.getElementById("undl");
underline.onclick = function()
{
	"use strict";
	document.execCommand("underline");
};
var superscript = document.getElementById("sup");
superscript.onclick = function()
{
	"use strict";
	document.execCommand("superscript");
};
var subscript = document.getElementById("sub");
subscript.onclick = function()
{
	"use strict";
	document.execCommand("subscript");
};
var left = document.getElementById("lef");
left.onclick = function()
{
	"use strict";
	document.execCommand("justifyLeft");
};
var center = document.getElementById("cen");
center.onclick = function()
{
	"use strict";
	document.execCommand("justifyCenter");
};
var right = document.getElementById("rig");
right.onclick = function()
{
	"use strict";
	document.execCommand("justifyRight");
};
var del = document.getElementById("del");
del.onclick = function()
{
	"use strict";
	document.execCommand("delete");
};
var undo = document.getElementById("und");
undo.onclick = function()
{
	"use strict";
	document.execCommand("undo");
};
var redo = document.getElementById("red");
redo.onclick = function()
{
	"use strict";
	document.execCommand("redo");
};







