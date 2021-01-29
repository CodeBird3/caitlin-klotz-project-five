(this.webpackJsonpbulletJournal=this.webpackJsonpbulletJournal||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(2),a=n.n(i),r=n(21),s=n.n(r),l=(n(28),n(6)),o=n(7),d=n(9),j=n(8),b=(n(29),n(18));n(30);b.a.initializeApp({apiKey:"AIzaSyD81gW-6r5CYr7Joct3zjPL1Eryntb3RjY",authDomain:"digibujoproject5.firebaseapp.com",databaseURL:"https://digibujoproject5.firebaseio.com",projectId:"digibujoproject5",storageBucket:"digibujoproject5.appspot.com",messagingSenderId:"897137595662",appId:"1:897137595662:web:30fb6d9f801e90cefb735f"});var u=b.a,h=n(14),m=n(11),p=n(22),O=n(5),y=n(19),x=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(c.jsx)("header",{className:"header",children:Object(c.jsxs)("div",{className:"wrapper",children:[Object(c.jsx)(y.a,{direction:"down",duration:"2500",children:Object(c.jsx)("h1",{children:"Welcome to your Digital BuJo!"})}),Object(c.jsx)(y.a,{direction:"up",duration:"1500",children:Object(c.jsx)("label",{htmlFor:"getStarted",children:"Get Started!"})}),Object(c.jsx)("input",{type:"checkbox",id:"getStarted"}),Object(c.jsxs)("section",{className:"howToUse",children:[Object(c.jsx)("h2",{children:"How it Works:"}),Object(c.jsxs)("ol",{children:[Object(c.jsx)("li",{children:"Just like any other journal, let the Digital BuJo store your thoughts!"}),Object(c.jsx)("li",{children:'In the "New Entry" section below, choose the symbol that best reflects the entry (e.g. is the entry a task that you need to complete, or an appointment you need to remember?) and add text to your entry.'}),Object(c.jsx)("li",{children:'Click "Add Entry" and watch your new journal entry appear on the page below!'}),Object(c.jsx)("li",{children:"To edit your entries:"}),Object(c.jsxs)("ol",{className:"infoSublevel",children:[Object(c.jsxs)("li",{children:["If you made a typo, or need to add something the entry, click on ",Object(c.jsx)(O.a,{icon:"pencil-alt"})," to edit."]}),Object(c.jsxs)("li",{children:["If you have completed the task, check it off by clicking on ",Object(c.jsx)(O.a,{icon:"check"}),"."]}),Object(c.jsxs)("li",{children:["No longer have that appointment to go to? Click on ",Object(c.jsx)(O.a,{icon:"ban"})," to show that it's been cancelled."]}),Object(c.jsxs)("li",{children:["If you want to remove the entry from your journal, click on ",Object(c.jsx)(O.a,{icon:"times"}),". WARNING: This will permanently delete the entry."]})]})]}),Object(c.jsx)("label",{htmlFor:"getStarted",className:"close",children:"Close"})]})]})})}}]),n}(i.Component),f=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).selectedSymbol=function(t){var n=t.target.id;e.setState({currentSymbol:n})},e.newEntryText=function(t){var n=t.target.value;e.setState({currentText:n})},e.clearState=function(t){e.setState({currentSymbol:"",currentText:""})},e.state={currentSymbol:"",currentText:""},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.props.submit;return Object(c.jsx)("section",{className:"newEntry",children:Object(c.jsxs)("div",{className:"wrapper",children:[Object(c.jsx)("h2",{children:"New Entry"}),Object(c.jsxs)("form",{className:"newEntryForm",children:[Object(c.jsxs)("fieldset",{onChange:this.selectedSymbol,children:[Object(c.jsx)("legend",{children:"Is this a:"}),Object(c.jsx)("input",{type:"radio",name:"entrySymbol",id:"task"}),Object(c.jsxs)("label",{htmlFor:"task",children:[Object(c.jsx)(O.a,{icon:"circle"}),Object(c.jsx)("p",{children:"Task"})]}),Object(c.jsx)("input",{type:"radio",name:"entrySymbol",id:"event"}),Object(c.jsxs)("label",{htmlFor:"event",children:[Object(c.jsx)(O.a,{icon:["far","circle"]}),Object(c.jsx)("p",{children:"Event"})]}),Object(c.jsx)("input",{type:"radio",name:"entrySymbol",id:"appointment"}),Object(c.jsxs)("label",{htmlFor:"appointment",children:[Object(c.jsx)(O.a,{icon:"caret-up"}),Object(c.jsx)("p",{children:"Appointment"})]}),Object(c.jsx)("input",{type:"radio",name:"entrySymbol",id:"note"}),Object(c.jsxs)("label",{htmlFor:"note",children:[Object(c.jsx)(O.a,{icon:"minus"}),Object(c.jsx)("p",{children:"Note"})]}),Object(c.jsx)("input",{type:"radio",name:"entrySymbol",id:"priority"}),Object(c.jsxs)("label",{htmlFor:"priority",children:[Object(c.jsx)(O.a,{icon:"asterisk"}),Object(c.jsx)("p",{children:"Priority"})]})]}),Object(c.jsxs)("div",{className:"textEntry",children:[Object(c.jsx)("label",{htmlFor:"newEntry",children:"Add a New Entry:"}),Object(c.jsx)("textarea",{name:"newEntry",id:"newEntry",placeholder:"e.g. Today I...",value:this.state.currentText,onChange:this.newEntryText})]}),Object(c.jsx)("button",{onClick:function(n){t(n,e.state.currentSymbol,e.state.currentText),e.clearState(e.state.currentSymbol)},children:"Add Entry"})]})]})})}}]),n}(i.Component),g=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.toggleEdit,n=e.toggleComplete,a=e.toggleCancelled,r=e.toggleDelete;e.completeStatus,e.cancelledStatus;return Object(c.jsxs)(i.Fragment,{children:[Object(c.jsx)("button",{htmlFor:"editButton","aria-label":"edit entry",onClick:t,children:Object(c.jsx)(O.a,{icon:"pencil-alt"})}),Object(c.jsx)("button",{htmlFor:"completeButton","aria-label":"complete entry",onClick:n,children:Object(c.jsx)(O.a,{icon:"check"})}),Object(c.jsx)("button",{htmlFor:"cancelButton","aria-label":"cancel entry",onClick:a,children:Object(c.jsx)(O.a,{icon:"ban"})}),Object(c.jsx)("button",{htmlFor:"deleteButton","aria-label":"delete entry",onClick:r,children:Object(c.jsx)(O.a,{icon:"times"})})]})}}]),n}(i.Component),v=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).handleEdit=function(t){var n=t.target.value;console.log(n),e.setState({updatedText:n})},e.cancelEdit=function(e){e.preventDefault()},e.state={updatedText:""},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.displayEditForm,i=t.currentText,a=t.submitChanges,r=t.entryId,s=t.toggleEdit;return Object(c.jsxs)("form",{className:n,children:[Object(c.jsx)("h3",{children:"Add Changes to Your Entry"}),Object(c.jsxs)("div",{className:"flexEdit",children:[Object(c.jsx)("textarea",{id:"",defaultValue:i,onChange:this.handleEdit}),Object(c.jsxs)("div",{className:"flexButtons",children:[Object(c.jsx)("button",{onClick:function(t){a(t,e.state.updatedText,r),s()},children:"Confirm Changes"}),Object(c.jsx)("button",{onClick:function(t){e.cancelEdit(t),s()},children:"Cancel Changes"})]})]})]})}}]),n}(i.Component),C=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,i=new Array(c),a=0;a<c;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).cancelDelete=function(e){e.preventDefault()},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.displayDeleteOptions,i=t.toggleDelete,a=t.deleteEntry,r=t.entryId;return Object(c.jsxs)("div",{className:n,children:[Object(c.jsx)("h3",{children:"Are you sure you want to delete this entry?"}),Object(c.jsx)("button",{onClick:function(t){e.cancelDelete(t),a(r),i()},children:"Yes"}),Object(c.jsx)("button",{onClick:function(t){e.cancelDelete(t),i()},children:"No"})]})}}]),n}(i.Component),E=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).showSymbol=function(e){switch(e){case"task":return Object(c.jsx)(O.a,{icon:"circle"});case"event":return Object(c.jsx)(O.a,{icon:["far","circle"]});case"appointment":return Object(c.jsx)(O.a,{icon:"caret-up"});case"note":return Object(c.jsx)(O.a,{icon:"minus"});case"priority":return Object(c.jsx)(O.a,{icon:"asterisk"});default:return"No symbols matched"}},e.toggleActive=function(){e.setState({isActive:!e.state.isActive})},e.handleEdit=function(){e.setState({needsEdit:!e.state.needsEdit})},e.isCompleted=function(){e.setState({isComplete:!e.state.isComplete})},e.isCancelled=function(){e.setState({isCancelled:!e.state.isCancelled})},e.confirmDelete=function(){e.setState({toDelete:!e.state.toDelete})},e.state={isActive:!1,needsEdit:!1,isComplete:!1,isCancelled:!1,toDelete:!1},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.symbol,i=e.text,a=e.submitChanges,r=(e.completeStatus,e.cancelledStatus,e.deleteEntry);return console.log(t),Object(c.jsxs)("li",{onClick:this.toggleActive,className:"".concat(this.state.isComplete?"completed":""," ").concat(this.state.isCancelled?"cancelled":""),children:[Object(c.jsx)("i",{children:this.showSymbol(n)}),Object(c.jsx)("p",{children:i}),Object(c.jsx)("div",{className:this.state.isActive?"showButtons":"hideButtons",children:Object(c.jsx)(g,{value:t,toggleEdit:this.handleEdit,toggleComplete:this.isCompleted,toggleCancelled:this.isCancelled,toggleDelete:this.confirmDelete})}),Object(c.jsx)(v,{displayEditForm:this.state.needsEdit?"editForm":"hideForm",currentText:i,submitChanges:a,entryId:t,toggleEdit:this.handleEdit}),Object(c.jsx)(C,{displayDeleteOptions:this.state.toDelete?"confirmDelete":"hideForm",toggleDelete:this.confirmDelete,deleteEntry:r,entryId:t})]},t)}}]),n}(i.Component);h.b.add(m.e,m.c,m.f,m.a,p.a,m.g,m.d,m.b,m.h);var S=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).addEntry=function(e,t,n){e.preventDefault();var c={symbol:t,entry:n};u.database().ref().push(c)},e.submitChanges=function(e,t,n){e.preventDefault(),u.database().ref().child(n).update({entry:t})},e.deleteEntry=function(e){u.database().ref().child(e).remove()},e.state={entries:[],currentEntry:{}},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;u.database().ref().on("value",(function(t){var n=t.val(),c=[];for(var i in n){var a=n[i],r={id:i,symbol:a.symbol,entry:a.entry};c.unshift(r)}e.setState({entries:c})}))}},{key:"render",value:function(){var e=this;return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(x,{}),Object(c.jsxs)("main",{children:[Object(c.jsx)(f,{submit:this.addEntry}),Object(c.jsx)("section",{className:"bujoEntries wrapper",children:Object(c.jsx)("ul",{children:this.state.entries.map((function(t){return Object(c.jsx)(E,{id:t.id,symbol:t.symbol,text:t.entry,submitChanges:e.submitChanges,completeStatus:e.handleComplete,cancelledStatus:e.handleCancelled,deleteEntry:e.deleteEntry})}))})})]}),Object(c.jsxs)("footer",{children:["Created at ",Object(c.jsx)("a",{href:"https://junocollege.com/",children:"Juno College"})]})]})}}]),n}(i.Component),k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),a(e),r(e)}))};s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(S,{})}),document.getElementById("root")),k()}},[[40,1,2]]]);
//# sourceMappingURL=main.0c7aa4a2.chunk.js.map