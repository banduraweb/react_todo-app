(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(9),r=n.n(l),c=(n(15),n(16),n(7)),s=n(6),i=n(1),u=n(2),d=n(4),m=n(3),f=n(5),h=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={placeholder:"What needs to be done?",inputValue:""},n.handleSetTodoValue=function(e){n.setState({inputValue:e.target.value})},n.handleSubmit=function(e){if(e.preventDefault(),""!==n.state.inputValue){var t=n.state.inputValue;n.props.addTodo(t),n.setState({inputValue:"",placeholder:"What needs to be done?"})}else n.setState({placeholder:"YOU HAVE TO INPUT TODO"})},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{onChange:this.handleSetTodoValue,value:this.state.inputValue,className:"new-todo",placeholder:this.state.placeholder}))}}]),t}(a.Component);var p=function(e){var t=e.todos,n=e.topToggle;return o.a.createElement("div",null,o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{onChange:function(e){return n(e.target.checked)},type:"checkbox",id:"toggle-all",className:"toggle-all",value:"toggle-all"}),t.length>0&&o.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete")))};var v=function(e){var t=e.todoItem,n=t.done?o.a.createElement("s",null,t.label):o.a.createElement(o.a.Fragment,null,t.label);return o.a.createElement("label",{htmlFor:"todo-1"},n)};var E=function(e){var t=e.todos,n=e.setDoneStatus,a=e.destroyTodo;return o.a.createElement("ul",{className:"todo-list"},t.map(function(e){return o.a.createElement("li",{key:e.id},o.a.createElement("div",{className:"view"},o.a.createElement("input",{onChange:function(){return n(e.id)},type:"checkbox",className:"toggle",id:e.id,checked:e.done}),o.a.createElement(v,{todoItem:e}),o.a.createElement("button",{onClick:function(){return a(e.id)},type:"button",className:"destroy"})),o.a.createElement("input",{type:"text",className:"edit"}))}))},b=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={isActive:"All"},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state.isActive,n=this.props,a=n.todos,l=n.TodosDone,r=n.setStateByEvenTargetValue;return o.a.createElement("div",null,a.length>0&&o.a.createElement("footer",{className:"footer"},o.a.createElement("span",{className:"todo-count"},a.length-l(),": items not finished",o.a.createElement("br",null)),o.a.createElement("ul",{className:"filters"},o.a.createElement("li",null,o.a.createElement("a",{href:"./#",onClick:function(t){r(t),e.setState({isActive:"All"})},className:"All"===t?"selected":""},"All")),o.a.createElement("li",null,o.a.createElement("a",{href:"./#",onClick:function(t){r(t),e.setState({isActive:"Active"})},className:"Active"===t?"selected":""},"Active")),o.a.createElement("li",null,o.a.createElement("a",{href:"./#",onClick:function(t){r(t),e.setState({isActive:"Completed"})},className:"Completed"===t?"selected":""},"Completed"))),a.filter(function(e){return e.done}).length>0&&o.a.createElement("button",{onClick:function(e){r(e)},type:"button",className:"clear-completed"},"Clear completed")))}}]),t}(a.Component),g=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={todos:[],currentFilter:"All"},n.addTodo=function(e){n.setState(function(n){var a=t.createTodo(e);return{todos:[].concat(Object(s.a)(n.todos),[a])}})},n.setDoneStatus=function(e){n.setState(function(t){return{todos:t.todos.map(function(t){return e===t.id?Object(c.a)({},t,{done:!t.done}):t})}})},n.destroyTodo=function(e){n.setState(function(t){return{todos:t.todos.filter(function(t){return t.id!==e})}})},n.showDoneInFooter=function(){return n.state.todos.filter(function(e){return e.done}).length},n.topToggle=function(e){n.setState(function(t){return{todos:t.todos.map(function(t){return Object(c.a)({},t,{done:e})})}})},n.setStateByEvenTargetValue=function(e){switch(e.target.textContent){case"Clear completed":n.setState(function(e){return{todos:e.todos.filter(function(e){return!e.done})}});break;case"Active":n.setState({currentFilter:"Active"});break;case"Completed":n.setState({currentFilter:"Completed"});break;case"All":n.setState({currentFilter:"All"})}},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.todos,n=e.currentFilter;return o.a.createElement("section",{className:"todoapp"},o.a.createElement("header",{className:"header"},o.a.createElement("h1",null,"todos"),o.a.createElement(h,{addTodo:this.addTodo})),o.a.createElement("section",{className:"main"},o.a.createElement(p,{todos:t,topToggle:this.topToggle}),o.a.createElement(E,{todos:function(){switch(n){case"Active":return t.filter(function(e){return!e.done});case"Completed":return t.filter(function(e){return e.done});default:return Object(s.a)(t)}}(),setDoneStatus:this.setDoneStatus,destroyTodo:this.destroyTodo})),o.a.createElement(b,{todos:t,setStateByEvenTargetValue:this.setStateByEvenTargetValue,TodosDone:this.showDoneInFooter}))}}],[{key:"createTodo",value:function(e){return{id:(new Date).getTime(),label:e,done:!1}}}]),t}(a.Component);r.a.render(o.a.createElement(g,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.7666501b.chunk.js.map