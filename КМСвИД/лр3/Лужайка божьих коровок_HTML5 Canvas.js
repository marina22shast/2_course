(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.тело = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABJmmQAAAegWAWQgWAVgdAAQgfAAgVgVQgWgWAAgeQAAgfAWgWQAVgWAfAAQAdAAAWAWQAWAWAAAfgAqsADQAAgCAAgBQAAjODJiSQDJiTEaAAQDnAACxBhAmDj8QAAAdgUAUQgUAVgdAAQgcAAgVgVQgUgUAAgdQAAgcAUgUQAVgUAcAAQAdAAAUAUQAUAUAAAcgAGvGFQi4Bvj3AAQj1AAi3huQgdgRgagTQhjhJgyhWQgzhZgBhnIQBAAIBDmVQAnAXAlAbQDJCSAADOQAADPjJCTQgaATgbAQgAmwCNQAAAZgTASQgRASgZAAQgaAAgSgSQgSgSAAgZQAAgaASgSQASgRAaAAQAZAAARARQATASAAAagAD0icQAAAYgQARQgRAQgYAAQgYAAgRgQQgRgRAAgYQAAgYARgRQARgRAYAAQAYAAARARQAQARAAAYgADfDhQAAAdgVAUQgUAUgdAAQgcAAgVgUQgUgUAAgdQAAgcAUgVQAVgUAcAAQAdAAAUAUQAVAVAAAcgAhEhWQAAAbgTASQgTATgaAAQgaAAgTgTQgTgSAAgbQAAgaATgUQATgSAaAAQAaAAATASQATAUAAAagAihC7QAAAagSASQgSATgaAAQgaAAgSgTQgTgSAAgaQAAgaATgSQASgSAaAAQAaAAASASQASASAAAagAgNGbQAAAXgRARQgRAQgXAAQgWAAgRgQQgRgRAAgXQAAgXARgQQARgRAWAAQAXAAARARQARAQAAAXgAFVADIBaGC");
	this.shape.setTransform(-207.5,-71.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABmBiQgDAAgDAAQhXAAg8hXQgjgwgPg8");
	this.shape_1.setTransform(-260.6375,-42.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AgcBuQgMgMAAgRQAAgRAMgMQAMgMAQAAQARAAAMAMQAMAMAAARQAAARgMAMQgMAMgRAAQgQAAgMgMgAgcgzQgMgMAAgRQAAgRAMgMQAMgMAQAAQARAAAMAMQAMAMAAARQAAARgMAMQgMAMgRAAQgQAAgMgMg");
	this.shape_2.setTransform(-148.85,-71.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AiuHSQgQgRAAgXQAAgXAQgQQARgRAXAAQAXAAAQARQARAQAAAXQAAAXgRARQgQAQgXAAQgXAAgRgQgAEUASIBDmUQAnAWAlAbQDJCSAADOQAADPjJCTQgaATgbAQgAHtBGQgMAMAAARQAAARAMAMQAMAMARAAQARAAAMgMQAMgMAAgRQAAgRgMgMQgMgMgRAAQgRAAgMAMgAHthbQgMAMAAARQAAARAMAMQAMAMARAAQARAAAMgMQAMgMAAgRQAAgRgMgMQgMgMgRAAQgRAAgMAMgAAoEhQgUgUAAgdQAAgcAUgVQAUgUAdAAQAcAAAUAUQAVAVAAAcQAAAdgVAUQgUAUgcAAQgdAAgUgUgAlMD2QgSgSAAgaQAAgaASgSQASgSAaAAQAaAAASASQATASAAAaQAAAagTASQgSATgaAAQgaAAgSgTgApaDHQgRgSAAgZQAAgaARgSQASgRAaAAQAZAAASARQASASAAAaQAAAZgSASQgSASgZAAQgaAAgSgSgAjygaQgTgSAAgbQAAgaATgTQATgTAaAAQAbAAASATQATATAAAaQAAAbgTASQgSATgbAAQgaAAgTgTgABRhkQgQgRAAgYQAAgYAQgRQARgQAYAAQAYAAARAQQARARAAAYQAAAYgRARQgRARgYAAQgYAAgRgRgAo5i8QgUgUAAgcQAAgdAUgUQAUgUAdAAQAcAAAUAUQAVAUAAAdQAAAcgVAUQgUAVgcAAQgdAAgUgVgAh1ljQgWgWAAgeQAAgfAWgWQAWgVAeAAQAfAAAVAVQAVAWAAAfQAAAegVAWQgVAWgfAAQgeAAgWgWg");
	this.shape_3.setTransform(-201.025,-73.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC0000").s().p("AktGGQgcgRgbgUQhjhIgyhWQgzhZgBhoIQBAAIBaGDQi4Bvj3AAQj0AAi4hugAARFzQgQARAAAXQAAAXAQAQQARARAXAAQAXAAAQgRQARgQAAgXQAAgXgRgRQgQgQgXAAQgXAAgRAQgADoCwQgUAUAAAdQAAAdAUATQAUAVAdAAQAcAAAUgVQAVgTAAgdQAAgdgVgUQgUgUgcAAQgdAAgUAUgAiMCPQgSASAAAaQAAAaASASQASATAaAAQAaAAASgTQATgSAAgaQAAgagTgSQgSgSgaAAQgaAAgSASgAmaBhQgRASAAAaQAAAZARARQASATAagBQAZABASgTQASgRAAgZQAAgagSgSQgSgRgZAAQgaAAgSARgAHUACIwBAAIAAgCQAAjODJiSQDJiTEaAAQDoAACwBhIhDGUgAgyiEQgTAUAAAaQAAAbATASQATATAaAAQAaAAASgTQATgSAAgbQAAgagTgUQgSgSgaAAQgaAAgTASgAERjFQgQARAAAYQAAAYAQAQQARARAYAAQAYAAARgRQARgQAAgYQAAgYgRgRQgRgRgYAAQgYAAgRARgAl5ksQgUAUAAAcQAAAdAUAUQAUAUAdABQAcgBAUgUQAVgUAAgdQAAgcgVgUQgUgVgcAAQgdAAgUAVgABKnbQgWAWAAAeQAAAfAWAWQAWAVAeAAQAfAAAVgVQAWgWAAgfQAAgegWgWQgVgWgfABQgegBgWAWgAotACg");
	this.shape_4.setTransform(-220.225,-71.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABgBiQhXAAg8hXQgjgwgPg8QAyBXBiBHQAbAUAcARIgGAAg");
	this.shape_5.setTransform(-260.6375,-42.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-277,-122.9,139,102);


(lib.лапка = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AkHCkIGUlHIB7AA");
	this.shape.setTransform(-168.675,-157.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("Aj6CzIF7leIB6gI");
	this.shape_1.setTransform(-169.95,-159.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AjtDDIFil1IB5gQ");
	this.shape_2.setTransform(-171.25,-160.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AjgDTIFJmNIB4gY");
	this.shape_3.setTransform(-172.525,-162.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AjTDjIEwmlIB3gg");
	this.shape_4.setTransform(-173.825,-163.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AjVDgIE0mhIB3ge");
	this.shape_5.setTransform(-173.625,-163.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AjXDeIE4meIB3gd");
	this.shape_6.setTransform(-173.425,-163.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("AjZDbIE8mZIB3gc");
	this.shape_7.setTransform(-173.225,-163.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AjbDZIE/mWIB4gb");
	this.shape_8.setTransform(-173.025,-162.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("AjdDWIFDmSIB4ga");
	this.shape_9.setTransform(-172.825,-162.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AjgDUIFImPIB5gY");
	this.shape_10.setTransform(-172.575,-162.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("AjjDRIFOmKIB5gX");
	this.shape_11.setTransform(-172.35,-162.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("AjlDOIFSmFIB5gV");
	this.shape_12.setTransform(-172.125,-161.85);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1,1,1).p("AjoDLIFYmBIB5gU");
	this.shape_13.setTransform(-171.9,-161.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("AjqDIIFcl9IB5gS");
	this.shape_14.setTransform(-171.65,-161.275);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,1,1).p("AjbDVIFAmPIB2ga");
	this.shape_15.setTransform(-173.2,-162.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("AjLDiIEjmiIB0gh");
	this.shape_16.setTransform(-174.775,-163.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(1,1,1).p("Ai7DvIEGm0IBxgp");
	this.shape_17.setTransform(-176.3,-165.225);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("AirD8IDonGIBvgx");
	this.shape_18.setTransform(-177.875,-166.525);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(1,1,1).p("AicEKIDMnZIBtg5");
	this.shape_19.setTransform(-179.425,-167.85);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,1,1).p("AiwD0IDxm5IBvgu");
	this.shape_20.setTransform(-177.45,-165.725);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(1,1,1).p("AjDDfIEWmbIBxgi");
	this.shape_21.setTransform(-175.5,-163.575);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(1,1,1).p("AjXDJIE8l6IBzgX");
	this.shape_22.setTransform(-173.55,-161.475);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(1,1,1).p("AjqC0IFhlcIB1gL");
	this.shape_23.setTransform(-171.6,-159.325);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(1,1,1).p("Aj+CeIGGk8IB3AA");
	this.shape_24.setTransform(-169.625,-157.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(1,1,1).p("AkACfIGJk9IB4AA");
	this.shape_25.setTransform(-169.475,-157.275);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(1,1,1).p("AkBChIGLlAIB4AA");
	this.shape_26.setTransform(-169.3,-157.35);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(1,1,1).p("AkDChIGNlBIB5AA");
	this.shape_27.setTransform(-169.15,-157.425);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(1,1,1).p("AkECiIGPlDIB6AA");
	this.shape_28.setTransform(-169,-157.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(1,1,1).p("AkFCjIGRlFIB6AA");
	this.shape_29.setTransform(-168.825,-157.575);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(1,1,1).p("AjJDqIEdmvIB2gk");
	this.shape_30.setTransform(-174.875,-164.675);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(1,1,1).p("Ai+DyIEKm6IBzgp");
	this.shape_31.setTransform(-175.95,-165.425);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(1,1,1).p("Ai0D5ID3nDIBygv");
	this.shape_32.setTransform(-177,-166.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(1,1,1).p("AipEBIDknOIBvgz");
	this.shape_33.setTransform(-178.075,-166.95);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(1,1,1).p("AieEJIDQnZIBtg4");
	this.shape_34.setTransform(-179.125,-167.725);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(1,1,1).p("AiWEMIDBncIBsg7");
	this.shape_35.setTransform(-180,-168.025);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(1,1,1).p("AiNEPICyngIBpg9");
	this.shape_36.setTransform(-180.875,-168.35);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(1,1,1).p("AiEESICiniIBnhB");
	this.shape_37.setTransform(-181.725,-168.65);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(1,1,1).p("Ah7EVICTnmIBlhD");
	this.shape_38.setTransform(-182.6,-168.975);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(1,1,1).p("AhzEYICFnpIBihG");
	this.shape_39.setTransform(-183.475,-169.275);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(1,1,1).p("AhuEYIB9noIBghH");
	this.shape_40.setTransform(-183.925,-169.225);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(1,1,1).p("AhqEXIB2nlIBfhI");
	this.shape_41.setTransform(-184.375,-169.175);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(1,1,1).p("AhlEWIBunkIBdhH");
	this.shape_42.setTransform(-184.825,-169.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(1,1,1).p("AhhEWIBnniIBchJ");
	this.shape_43.setTransform(-185.275,-169.05);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(1,1,1).p("AhcEWIBfngIBahL");
	this.shape_44.setTransform(-185.725,-169);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(1,1,1).p("AhsELIB8nSIBdhD");
	this.shape_45.setTransform(-184.175,-167.975);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(1,1,1).p("Ah7EBICXnEIBgg9");
	this.shape_46.setTransform(-182.625,-166.95);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(1,1,1).p("AiLD3IC0m3IBjg2");
	this.shape_47.setTransform(-181.075,-165.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(1,1,1).p("AiaDsIDPmoIBmgv");
	this.shape_48.setTransform(-179.525,-164.875);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(1,1,1).p("AiqDiIDsmbIBpgo");
	this.shape_49.setTransform(-177.975,-163.85);
	this.shape_49._off = true;

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(1,1,1).p("AitD8IDsnHIBvgw");
	this.shape_50.setTransform(-177.675,-166.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_49).wait(54).to({_off:false},0).wait(4).to({_off:true},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-196.1,-198.3,54.79999999999998,58.10000000000002);


(lib.Стоп = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AnQmyIFAAAIAANRIlAAAgAsarAIY1AAIAAWBI41AAg");
	this.shape.setTransform(-205.525,-11.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003300").s().p("AsaLBIAA2BIY1AAIAAWBgACHGfIFAAAIAAtRIlAAAgAnQGfIFAAAIAAtRIlAAAg");
	this.shape_1.setTransform(-205.525,-11.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ACMGpIAAtRIFAAAIAANRgAnLGpIAAtRIFAAAIAANRg");
	this.shape_2.setTransform(-206.025,-12.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-286,-83,161,143.1);


(lib.Пуск = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AoRoCIAAQFIQjm4g");
	this.shape.setTransform(-105,-4.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AoRoCIQjJNIwjG4g");
	this.shape_1.setTransform(-105,-4.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159,-56.9,108,105);


(lib.Назад = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhOjIQJXjwEvAQQE+ARgHEsQgRL3g+BeQhABjhhqpQgViPhGhKQhEhIh6gQQjEganUCHICHGyIzDkiITXtlg");
	this.shape.setTransform(-12.8414,-10.3658);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AN/CkQgViPhGhKQhEhIh6gQQjEganUCHICHGyIzDkiITXtlIi3ItQJXjwEvAQQE+ARgHEsQgRL3g+BeQgIAMgJAAQg7AAhVpSg");
	this.shape_1.setTransform(-12.8414,-10.3658);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.3,-87.2,229,153.7);


(lib.пузико = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.лапка("synched",0);
	this.instance.setTransform(333.35,27.5,1,1.1684,0,-150.0008,29.9996,-195,-141.2);

	this.instance_1 = new lib.лапка("synched",0);
	this.instance_1.setTransform(367.4,36.35,0.9553,1.0279,0,-165.0008,14.9992,-195,-141.2);

	this.instance_2 = new lib.лапка("synched",0);
	this.instance_2.setTransform(406.55,29.75,1,1.1259,0,180,0,-193.6,-142);

	this.instance_3 = new lib.лапка("synched",0);
	this.instance_3.setTransform(337.8,-60.1,1,1,-29.9992,0,0,-195,-141.2);

	this.instance_4 = new lib.лапка("synched",0);
	this.instance_4.setTransform(372.5,-65.45,1,1,-14.9983,0,0,-195.1,-141.2);

	this.instance_5 = new lib.лапка("synched",0);
	this.instance_5.setTransform(412.35,-52.4,1,1,0,0,0,-195.1,-141.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#996040").s().p("AnXFnQjEiVAAjSQAAjSDEiVQDEiVETABQEUgBDECVQDECVAADSQAADSjECVQjECVkUABQkTgBjEiVg");
	this.shape.setTransform(369,-14.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(302.3,-115.9,163.89999999999998,204);


(lib.жук = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.лапка("synched",0);
	this.instance.setTransform(-151.4,-109.55,0.6635,0.718,0,0,180,-195,-141.2);

	this.instance_1 = new lib.лапка("synched",0);
	this.instance_1.setTransform(-114.3,-119.9,0.5863,0.7972,0,0,180,-195.1,-141.2);

	this.instance_2 = new lib.лапка("synched",0);
	this.instance_2.setTransform(-76.8,-113.55,0.5234,0.7627,0,23.2248,-156.7771,-195.5,-140.8);

	this.instance_3 = new lib.лапка("synched",0);
	this.instance_3.setTransform(-148.4,-30.1,0.7564,0.6476,173.445,0,0,-196.2,-141.8);

	this.instance_4 = new lib.лапка("synched",0);
	this.instance_4.setTransform(-115.5,-19.9,0.6891,0.5321,165.0017,0,0,-195,-141.2);

	this.instance_5 = new lib.лапка("synched",0);
	this.instance_5.setTransform(-74.7,-26.65,0.6174,0.4643,142.7042,0,0,-195,-140.9);

	this.instance_6 = new lib.тело("synched",0);
	this.instance_6.setTransform(-109,-70,1,1,0,0,0,-207.5,-72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5,p:{startPosition:0}},{t:this.instance_4,p:{startPosition:0}},{t:this.instance_3,p:{startPosition:0}},{t:this.instance_2,p:{startPosition:0}},{t:this.instance_1,p:{startPosition:0}},{t:this.instance,p:{startPosition:0}}]}).to({state:[{t:this.instance_6},{t:this.instance_5,p:{startPosition:59}},{t:this.instance_4,p:{startPosition:59}},{t:this.instance_3,p:{startPosition:59}},{t:this.instance_2,p:{startPosition:59}},{t:this.instance_1,p:{startPosition:59}},{t:this.instance,p:{startPosition:59}}]},59).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187.6,-165.6,148.1,179.7);


(lib.Символ1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.лапка("synched",0);
	this.instance.setTransform(-28.3,93.45,0.8525,1.3158,-165.0013,0,0,-194.8,-141);

	this.instance_1 = new lib.лапка("synched",0);
	this.instance_1.setTransform(-1.3,98.05,0.662,1.0069,0,-171.6497,180,-195.2,-141.2);

	this.instance_2 = new lib.лапка("synched",0);
	this.instance_2.setTransform(30.3,92.25,0.6956,1.1053,180,0,0,-195.1,-141.1);

	this.instance_3 = new lib.лапка("synched",0);
	this.instance_3.setTransform(28.05,2.45,0.6444,0.7363,0,29.9976,-150.0014,-195.1,-141.2);

	this.instance_4 = new lib.лапка("synched",0);
	this.instance_4.setTransform(-29.05,2.5,0.8827,0.7621,0,0,180,-194.2,-141.2);

	this.instance_5 = new lib.лапка("synched",0);
	this.instance_5.setTransform(-1,-2,0.7016,0.7339,0,14.9989,-165.0014,-195,-141.2);

	this.instance_6 = new lib.тело("synched",0);
	this.instance_6.setTransform(-1.25,48,1,1,0,0,0,-207.5,-72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(-83.7,-36.5,152,168.3), null);


// stage content:
(lib.Лужайкабожьихкоровок_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,21];
	// timeline functions:
	this.frame_0 = function() {
		playSound("Жукзвукиwwwhotplayerru");
		/* stop;
		
		function f1 (event:MouseEvent): void
		{play();}
		
		Пуск.addEventListener(MouseEvent.CLICK,f1);
		
		function f2 (event:MouseEvent): void
		{stop();}
		
		Стоп.addEventListener(MouseEvent.CLICK,f2);
		
		function f3 (event:MouseEvent): void
		{gotoAndStop(0);}
		
		Назад.addEventListener(MouseEvent.CLICK,f3);*/
		this.stop;
		
		function f1 (args)
		{this.play();}
		
		this.Пуск.addEventListener("click",f1.bind(this));
		
		function f2 (args)
		{this.stop();}
		
		this.Стоп.addEventListener("click",f2.bind(this));
		
		function f3 (args)
		{this.gotoAndStop(0);}
		
		this.Назад.addEventListener("click",f3.bind(this));
	}
	this.frame_21 = function() {
		playSound("длябольшого");
		playSound("nasekomyiezvonkiirezkiiblizkii");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(39));

	// жук2
	this.instance = new lib.Символ1();
	this.instance.setTransform(836.2,730.2,0.4534,0.5057,-104.9964,0,0,-9.9,54.1);

	this.instance_1 = new lib.пузико("synched",0);
	this.instance_1.setTransform(531.45,390.75,0.4498,0.5601,-135,0,0,383.9,-13.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,regX:383.9,regY:-13.1,scaleX:0.4498,scaleY:0.5601,rotation:-135,guide:{path:[836.3,730.2,836.3,718.4,836.3,706.6,832.6,700.3,827.1,685.8,820.4,667.9,816.5,658.2,801.7,620.9,786.3,604.8,776.6,594.6,770.1,581.9,767.4,576.8,760.9,560.5,756,548.1,751.2,541.4,744.4,531.7,733.2,525.2,724.3,519.9,711.9,515.9,697.1,511.5,689.3,509.2,659.3,500.4,637.8,484.5,615.4,467.3,599.2,454.9,567.9,431.1,562.8,428.3,558.8,426.2,549.9,417.7,539.7,407.9,534.6,400,532.3,396.5,531.5,390.7]},mode:"synched",startPosition:0},24).to({_off:false,regX:-10.1,regY:54.2,scaleX:0.4533,scaleY:0.5057,rotation:-104.9957,guide:{path:[531.5,390.7,531.3,389.3,531.2,387.8,530.5,377.3,529.9,375.1,523.4,353.6,519.8,341.2,518.8,337.7,517.8,334.3,517.2,331.9,516.6,329.6]},mode:"independent"},4).to({regX:-9.9,regY:54.1,scaleX:0.4534,rotation:-104.9965,guide:{path:[516.5,329.6,512.3,313.4,509.5,298.6,506.4,282.1,502.5,273.5,498.6,265.2,491.9,260.1,487,256.3,474.8,250.6,457.4,242.4,448.5,237.5,445,235.6,400.9,212.8,371.7,197.7,361.1,190.7,342.7,178.5,331.2,172.9,321,168,313.2,167,308.3,166.3,298.7,167,287.9,167.8,279.7,167.2,276.6,167,255.8,166.9,236.3,166.9,223.3,165.7,181.2,161.7,170.4,143.9,167.1,138.4,162.6,132.9,157.9,127.5,155.9,124.8,149.1,115.8,146.9,101.6,145.3,90.8,141.9,49.4,138.7,9,134.3,-18.5,134.3,-23.2,134.3,-27.9,136.8,-27.9,139.2,-27.9]}},31).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},24).to({_off:true,regX:-10.1,regY:54.2,scaleX:0.4533,scaleY:0.5057,rotation:-104.9957,guide:{path:[531.5,390.7,531.3,389.3,531.2,387.8,530.5,377.3,529.9,375.1,523.4,353.6,519.8,341.2,518.8,337.7,517.8,334.3,517.2,331.9,516.6,329.6]},mode:"independent"},4).wait(32));

	// жук
	this.instance_2 = new lib.жук("synched",0);
	this.instance_2.setTransform(-73.5,766.05,1,1,-53.9458,0,0,-114.7,-73.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:-114.6,rotation:-14.999,guide:{path:[-73.3,766.1,-73.3,766.1,-73.3,766,-61.6,748.8,-49.9,731.6,-49.9,719.1,-49.9,706.6,-39,705.5,-37.8,698.8,-37.8,688.7,-37.8,678.5,-27.2,676.9,-24.9,675.4,-14.7,659.8,-4.5,644.1,3.3,637.8,4.8,637.8,33.7,622.2,62.7,606.6,172.1,600.4,281.6,594.1,340.2,555.8,398.8,517.5,408.9,505.8,419.1,494,419.1,491.7,419.1,489.3,428.5,476,437.9,462.7,437.9,459.6,437.9,456.5,442.6,440.1,447.3,423.7,447.3,421.4,447.3,419,449.1,413.9,453.5,411.1,453.5,402.5,453.5,393.9,480.7,356.3,517.9,334.3,561,308.9,617.4,304.6,681,299.8,744.2,294,791.1,306.5,838,319,943.7,339.1,1043.1,307.2,1053.3,303.9,1061.8,295.7,1080.2,278,1094.4,256.5,1094.4,213.5,1094.4,170.5,1104.5,145.5,1114.7,120.5,1174.9,64.2,1235.1,7.9,1238.2,7.9,1241.4,7.9,1241.4,4,1241.4,0.1,1250.7,0.1,1260.1,0.1,1317.9,-12.4,1375.8,-24.9]}},59).wait(1));

	// жук3
	this.instance_3 = new lib.жук("synched",0);
	this.instance_3.setTransform(1167.8,438.75,0.4434,0.4159,0,-165.0022,-172.0355,-114.8,-73.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:-73,scaleX:0.4433,skewX:0,skewY:-7.034,guide:{path:[1167.8,438.8,1156.7,431.7,1149.6,429.2,1141.5,426.3,1130.6,426.3,1104.6,426.3,1088.4,445.2,1073.3,462.8,1073.3,488,1073.3,519.6,1112.3,537.2,1127.9,544.2,1147.7,547.8,1165.2,551.1,1181.7,551.1,1197.8,551.1,1215.5,546.6,1228,543.4,1245.7,536.7,1268.6,527.9,1272.3,526.7,1286.1,522.1,1295.3,522]},startPosition:59},59).wait(1));

	// куча_жуков
	this.instance_4 = new lib.жук("synched",0);
	this.instance_4.setTransform(195.35,415.6,0.3695,0.3807,29.9984,0,0,-114.5,-73.1);

	this.instance_5 = new lib.жук("synched",0);
	this.instance_5.setTransform(71.45,278.9,0.3147,0.4416,29.9973,0,0,-114.7,-73.1);

	this.instance_6 = new lib.жук("synched",0);
	this.instance_6.setTransform(929.8,97.75,0.5884,0.8436,150.0005,0,0,-114.8,-73.4);

	this.instance_7 = new lib.жук("synched",0);
	this.instance_7.setTransform(673.8,92.95,0.5505,0.5207,75.0002,0,0,-114.6,-73.2);

	this.instance_8 = new lib.жук("synched",0);
	this.instance_8.setTransform(1073.55,672.35,0.3983,0.4083,0,0,0,-114.8,-73.2);

	this.instance_9 = new lib.жук("synched",0);
	this.instance_9.setTransform(1205.15,675.9,0.3214,0.3166,180,0,0,-114.7,-73.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9,p:{startPosition:0}},{t:this.instance_8,p:{startPosition:0}},{t:this.instance_7,p:{startPosition:0}},{t:this.instance_6,p:{startPosition:0}},{t:this.instance_5,p:{startPosition:0}},{t:this.instance_4,p:{startPosition:0}}]}).to({state:[{t:this.instance_9,p:{startPosition:59}},{t:this.instance_8,p:{startPosition:59}},{t:this.instance_7,p:{startPosition:59}},{t:this.instance_6,p:{startPosition:59}},{t:this.instance_5,p:{startPosition:59}},{t:this.instance_4,p:{startPosition:59}}]},59).wait(1));

	// кнопки
	this.Назад = new lib.Назад();
	this.Назад.name = "Назад";
	this.Назад.setTransform(682.5,662.95,0.6211,0.7152);
	new cjs.ButtonHelper(this.Назад, 0, 1, 1);

	this.Стоп = new lib.Стоп();
	this.Стоп.name = "Стоп";
	this.Стоп.setTransform(665.3,669.35,0.7542,0.6024);
	new cjs.ButtonHelper(this.Стоп, 0, 1, 1);

	this.Пуск = new lib.Пуск();
	this.Пуск.name = "Пуск";
	this.Пуск.setTransform(459.05,662.7,0.7783,1);
	new cjs.ButtonHelper(this.Пуск, 0, 1, 1);

	this.instance_10 = new lib.Назад();
	this.instance_10.setTransform(682.5,662.95,0.6211,0.7152);
	new cjs.ButtonHelper(this.instance_10, 0, 1, 1);

	this.instance_11 = new lib.Стоп();
	this.instance_11.setTransform(665.3,669.35,0.7542,0.6024);
	new cjs.ButtonHelper(this.instance_11, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Пуск},{t:this.Стоп},{t:this.Назад}]}).to({state:[{t:this.Пуск},{t:this.instance_11},{t:this.instance_10}]},59).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(474.9,254.8,975.6999999999999,610.5999999999999);
// library properties:
lib.properties = {
	id: 'ABF3A90FFCFA94439637964C3480E337',
	width: 1280,
	height: 720,
	fps: 20,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"sounds/Жукзвукиwwwhotplayerru.mp3?1646847914947", id:"Жукзвукиwwwhotplayerru"},
		{src:"sounds/длябольшого_.mp3?1646847914947", id:"длябольшого"},
		{src:"sounds/nasekomyiezvonkiirezkiiblizkii.mp3?1646847914947", id:"nasekomyiezvonkiirezkiiblizkii"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['ABF3A90FFCFA94439637964C3480E337'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;