(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.an_TextInput = function(options) {
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.my_bt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("summa", "24px 'Arial Rounded MT Bold'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 107;
	this.text.parent = this;
	this.text.setTransform(69.3,-0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC6633").s().p("ApsCKQg0AAAAg0IAAirQAAg0A0AAITZAAQA0AAAAA0IAACrQAAA0g0AAg");
	this.shape.setTransform(67.3,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2.5,134.7,32.9);


// stage content:
(lib.summa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.my_bt.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		
		var fl_TF = new createjs.Text();
		this.addChild(fl_TF);
		
		function fl_MouseClickHandler_2()
		{
			var slag1 = +document.getElementById("ti1").value;
			var slag2 = +document.getElementById("ti2").value;
		
			if (fl_TF !== "") fl_TF.text = "";
			fl_TF.x = 265;
			fl_TF.y = 58;
			fl_TF.color = "#884422";
			fl_TF.font = "20px Arial";
			fl_TF.text = (slag1 + slag2);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// bt
	this.my_bt = new lib.my_bt();
	this.my_bt.parent = this;
	this.my_bt.setTransform(203,112.1,1,1,0,0,0,67.3,13.8);
	new cjs.ButtonHelper(this.my_bt, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333300").ss(1,1,1).p("ApsiJITZAAQA0AAAAA0IAACrQAAA0g0AAIzZAAQg0AAAAg0IAAirQAAg0A0AAg");
	this.shape.setTransform(203,112.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.my_bt}]}).wait(1));

	// Слой 1
	this.ti2 = new lib.an_TextInput({'id': 'ti2', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.ti2.setTransform(185.7,70.1,0.8,1,0,0,0,50,11);

	this.ti1 = new lib.an_TextInput({'id': 'ti1', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.ti1.setTransform(54.8,70.1,0.8,1,0,0,0,50,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333300").ss(1,1,1).p("AH2AjIDMAAAH2goIDSAAApbAKIBrAAApbAKIAABIApbhRIAABbArHAKIBsAA");
	this.shape_1.setTransform(183.3,70.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.ti1},{t:this.ti2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(214.4,133.6,257,70.1);
// library properties:
lib.properties = {
	width: 400,
	height: 150,
	fps: 24,
	color: "#CCCCCC",
	opacity: 1.00,
	manifest: [
		{src:"https://code.jquery.com/jquery-2.2.4.min.js?1506281486421", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1506281486421", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js?1506281486421", id:"an.TextInput"}
	],
	preloads: []
};


function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;