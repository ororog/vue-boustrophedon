(function(t){function e(e){for(var a,r,c=e[0],s=e[1],d=e[2],f=0,u=[];f<c.length;f++)r=c[f],i[r]&&u.push(i[r][0]),i[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);l&&l(e);while(u.length)u.shift()();return o.push.apply(o,d||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={app:0},o=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("c21b"),i=n.n(a);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("744f"),n("6c7b"),n("7514"),n("20d6"),n("1c4c"),n("6762"),n("cadf"),n("e804"),n("55dd"),n("d04f"),n("c8ce"),n("217b"),n("7f7f"),n("f400"),n("7f25"),n("536b"),n("d9ab"),n("f9ab"),n("32d7"),n("25c9"),n("9f3c"),n("042e"),n("c7c6"),n("f4ff"),n("049f"),n("7872"),n("a69f"),n("0b21"),n("6c1a"),n("c7c62"),n("84b4"),n("c5f6"),n("2e37"),n("fca0"),n("7cdf"),n("ee1d"),n("b1b1"),n("87f3"),n("9278"),n("5df2"),n("04ff"),n("f751"),n("4504"),n("fee7"),n("ffc1"),n("0d6d"),n("9986"),n("8e6e"),n("25db"),n("e4f7"),n("b9a1"),n("64d5"),n("9aea"),n("db97"),n("66c8"),n("57f0"),n("165b"),n("456d"),n("cf6a"),n("fd24"),n("8615"),n("551c"),n("097d"),n("df1b"),n("2397"),n("88ca"),n("ba16"),n("d185"),n("ebde"),n("2d34"),n("f6b3"),n("2251"),n("c698"),n("a19f"),n("9253"),n("9275"),n("3b2b"),n("3846"),n("4917"),n("a481"),n("28a5"),n("386d"),n("6b54"),n("4f7f"),n("8a81"),n("ac4d"),n("8449"),n("9c86"),n("fa83"),n("48c0"),n("a032"),n("aef6"),n("d263"),n("6c37"),n("9ec8"),n("5695"),n("2fdb"),n("d0b0"),n("b54a"),n("f576"),n("ed50"),n("788d"),n("14b9"),n("f386"),n("f559"),n("1448"),n("673e"),n("242a"),n("c66f"),n("b05c"),n("34ef"),n("6aa2"),n("15ac"),n("af56"),n("b6e4"),n("9c29"),n("63d9"),n("4dda"),n("10ad"),n("c02b"),n("4795"),n("130f"),n("ac6a"),n("96cf");var a=n("2b0e"),i=n("ce5b"),o=n.n(i);n("bf40");a["default"].use(o.a,{});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-navigation-drawer",{attrs:{fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[t._v("\n    テキストを読み込む\n    "),n("v-list",{attrs:{dense:""}},[n("v-list-tile-content",[n("v-btn",{on:{click:t.clickNeko}},[t._v("\n          吾輩は猫である\n        ")])],1),n("v-list-tile-content",[n("v-btn",{on:{click:t.clickGinga}},[t._v("\n          銀河鉄道の夜\n        ")])],1),n("v-list-tile-content",[n("v-btn",{on:{click:t.clickAlice}},[t._v("\n          Alice in Wonderland\n        ")])],1),n("v-list-tile-content",[n("v-btn",{on:{click:t.clickPolitics}},[t._v("\n          アリストテレス 政治学\n        ")])],1)],1),n("a",{attrs:{href:"https://ja.wikipedia.org/wiki/%E7%89%9B%E8%80%95%E5%BC%8F"}},[t._v("牛耕式について")])],1),n("v-toolbar",{attrs:{color:"indigo",dark:"",fixed:"",app:""}},[n("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-toolbar-title",[t._v("牛耕式ビューワー")])],1),n("v-content",[n("v-container",{attrs:{"grid-list-md":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"box",attrs:{"d-flex":"",xs12:"",md6:""}},[n("v-card",[n("v-textarea",{attrs:{"auto-grow":"",outline:"","hide-details":"",label:"原文(テキストを編集できます)"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1)],1),n("v-flex",{staticClass:"box",attrs:{"d-flex":"",xs12:"",md6:""}},[n("v-card",{staticClass:"textBoxWrap"},[n("label",{staticClass:"label"},[t._v("牛耕式")]),n("div",{ref:"textBox",staticClass:"textBox"})])],1)],1)],1)],1)],1)},c=[],s=n("1157"),d=n.n(s),l=n("f0b8"),f=n.n(l),u=n("d9ba"),h=n.n(u),b=n("6222"),p=n.n(b),v=n("7292"),w=n.n(v),x=d.a,g={name:"App",mounted:function(){var t=this;window.addEventListener("resize",this.handleResize),this.$nextTick(function(){return t.boustrophedon()})},data:function(){return{drawer:null,text:f.a}},methods:{boustrophedon:function(){var t=x(this.$refs.textBox);t.empty();var e=x("<div></div>");t.append(e);for(var n=0;n<this.text.length;n++){var a=e.height();"\n"===this.text[n]?(e.append("<br />"),e=x("<div></div>"),t.append(e)):(e.text(e.text()+this.text[n]),0!==a&&e.height()>a&&(e.text(e.text().slice(0,-1)),e=x("<div></div>"),t.append(e),e.text(this.text[n])))}},handleResize:function(){var t=this;this.$nextTick(function(){return t.boustrophedon()})},clickNeko:function(){this.text=f.a},clickGinga:function(){this.text=h.a},clickAlice:function(){this.text=p.a},clickPolitics:function(){this.text=w.a}},watch:{text:function(){this.boustrophedon()}}},k=g,y=(n("034f"),n("2877")),m=Object(y["a"])(k,r,c,!1,null,null,null);m.options.__file="App.vue";var _=m.exports;a["default"].config.productionTip=!1,new a["default"]({render:function(t){return t(_)}}).$mount("#app")},6222:function(t,e){t.exports="CHAPTER I Down the Rabbit-Hole\n\nAlice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, `and what is the use of a book,' thought Alice `without pictures or conversation?'\nSo she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her.\nThere was nothing so very remarkable in that; nor did Alice think it so very much out of the way to hear the Rabbit say to itself, `Oh dear! Oh dear! I shall be late!' (when she thought it over afterwards, it occurred to her that she ought to have wondered at this, but at the time it all seemed quite natural); but when the Rabbit actually took a watch out of its waistcoat-pocket, and looked at it, and then hurried on, Alice started to her feet, for it flashed across her mind that she had never before seen a rabbit with either a waistcoat-pocket, or a watch to take out of it, and burning with curiosity, she ran across the field after it, and fortunately was just in time to see it pop down a large rabbit-hole under the hedge.\n"},7292:function(t,e){t.exports="Politics\n\nἐπειδὴ πᾶσαν πόλιν ὁρῶμεν κοινωνίαν τινὰ οὖσαν καὶ πᾶσαν κοινωνίαν ἀγαθοῦ τινος ἕνεκεν συνεστηκυῖαν （τοῦ γὰρ εἶναι δοκοῦντος ἀγαθοῦ χάριν πάντα πράττουσι πάντες）, δῆλον ὡς πᾶσαι μὲν ἀγαθοῦ τινος στοχάζονται, μάλιστα δὲ καὶ τοῦ κυριωτάτου πάντων ἡ πασῶν κυριωτάτη καὶ πάσας περιέχουσα τὰς ἄλλας. αὕτη δ᾽ ἐστὶν ἡ καλουμένη πόλις καὶ ἡ κοινωνία ἡ πολιτική. ὅσοι μὲν οὖν οἴονται πολιτικὸν καὶ βασιλικὸν καὶ οἰκονομικὸν καὶ δεσποτικὸν εἶναι τὸν αὐτὸν οὐ καλῶς λέγουσιν （πλήθει γὰρ καὶ ὀλιγότητι νομίζουσι διαφέρειν ἀλλ᾽ οὐκ εἴδει τούτων ἕκαστον, οἷον ἂν μὲν ὀλίγων, δεσπότην, ἂν δὲ πλειόνων, οἰκονόμον, ἂν δ᾽ ἔτι πλειόνων, πολιτικὸν ἢ βασιλικόν, ὡς οὐδὲν διαφέρουσαν μεγάλην οἰκίαν ἢ μικρὰν πόλιν: καὶ πολιτικὸν δὲ καὶ βασιλικόν, ὅταν μὲν αὐτὸς ἐφεστήκῃ, βασιλικόν, ὅταν δὲ κατὰ τοὺς λόγους τῆς ἐπιστήμης τῆς τοιαύτης κατὰ μέρος ἄρχων καὶ ἀρχόμενος, πολιτικόν: ταῦτα δ᾽ οὐκ ἔστιν ἀληθῆ）: δῆλον δ᾽ ἔσται τὸ λεγόμενον ἐπισκοποῦσι κατὰ τὴν ὑφηγημένην μέθοδον. ὥσπερ γὰρ ἐν τοῖς ἄλλοις τὸ σύνθετον μέχρι τῶν ἀσυνθέτων ἀνάγκη διαιρεῖν （ταῦτα γὰρ ἐλάχιστα μόρια τοῦ παντός）, οὕτω καὶ πόλιν ἐξ ὧν σύγκειται σκοποῦντες ὀψόμεθα καὶ περὶ τούτων μᾶλλον, τί τε διαφέρουσιν ἀλλήλων καὶ εἴ τι τεχνικὸν ἐνδέχεται λαβεῖν περὶ ἕκαστον τῶν ῥηθέντων.\n\nεἰ δή τις ἐξ ἀρχῆς τὰ πράγματα φυόμενα βλέψειεν, ὥσπερ ἐν τοῖς ἄλλοις, καὶ ἐν τούτοις κάλλιστ᾽ ἂν οὕτω θεωρήσειεν. ἀνάγκη δὴ πρῶτον συνδυάζεσθαι τοὺς ἄνευ ἀλλήλων μὴ δυναμένους εἶναι, οἷον θῆλυ μὲν καὶ ἄρρεν τῆς γενέσεως ἕνεκεν （καὶ τοῦτο οὐκ ἐκ προαιρέσεως, ἀλλ᾽ ὥσπερ καὶ ἐν τοῖς ἄλλοις ζῴοις καὶ φυτοῖς φυσικὸν τὸ ἐφίεσθαι, οἷον αὐτό, τοιοῦτον καταλιπεῖν ἕτερον）, ἄρχον δὲ καὶ ἀρχόμενον φύσει, διὰ τὴν σωτηρίαν. τὸ μὲν γὰρ δυνάμενον τῇ διανοίᾳ προορᾶν ἄρχον φύσει καὶ δεσπόζον φύσει, τὸ δὲ δυνάμενον τῷ σώματι ταῦτα πονεῖν ἀρχόμενον καὶ φύσει δοῦλον: διὸ δεσπότῃ καὶ δούλῳ ταὐτὸ συμφέρει.\n"},c21b:function(t,e,n){},d9ba:function(t,e){t.exports="一、午后の授業\n\n「ではみなさんは、そういうふうに川だと云われたり、乳の流れたあとだと云われたりしていたこのぼんやりと白いものがほんとうは何かご承知ですか。」先生は、黒板に吊した大きな黒い星座の図の、上から下へ白くけぶった銀河帯のようなところを指しながら、みんなに問をかけました。\n　カムパネルラが手をあげました。それから四五人手をあげました。ジョバンニも手をあげようとして、急いでそのままやめました。たしかにあれがみんな星だと、いつか雑誌で読んだのでしたが、このごろはジョバンニはまるで毎日教室でもねむく、本を読むひまも読む本もないので、なんだかどんなこともよくわからないという気持ちがするのでした。\n　ところが先生は早くもそれを見附けたのでした。\n「ジョバンニさん。あなたはわかっているのでしょう。」\n　ジョバンニは勢よく立ちあがりましたが、立って見るともうはっきりとそれを答えることができないのでした。ザネリが前の席からふりかえって、ジョバンニを見てくすっとわらいました。ジョバンニはもうどぎまぎしてまっ赤になってしまいました。先生がまた云いました。\n「大きな望遠鏡で銀河をよっく調べると銀河は大体何でしょう。」\n　やっぱり星だとジョバンニは思いましたがこんどもすぐに答えることができませんでした。\n　先生はしばらく困ったようすでしたが、眼をカムパネルラの方へ向けて、\n「ではカムパネルラさん。」と名指しました。するとあんなに元気に手をあげたカムパネルラが、やはりもじもじ立ち上ったままやはり答えができませんでした。\n"},f0b8:function(t,e){t.exports="　吾輩は猫である。名前はまだ無い。\n\n　どこで生まれたか頓と見當がつかぬ。何ても暗薄いじめじめした所でニャー／＼泣いて居た事丈は記憶して居る。吾輩はこゝで始めて人間といふものを見た。然もあとで聞くとそれは書生といふ人間で一番獰惡な種族であつたさうだ。此書生といふのは時々我々を捕へて煮て食ふといふ話である。然し其當時は何といふ考もなかつたから別段恐しいとも思はなかつた。但彼の掌に載せられてスーと持ち上げられた時何だかフハフハした感じが有つた許りである。掌の上で少し落ち付いて書生の顏を見たが所謂人間といふものゝ見始であらう。此の時妙なものだと思つた感じが今でも殘つて居る。第一毛を以て裝飾されべき筈の顏がつる／＼して丸で藥罐だ。其後猫にも大分逢つたがこんな片輪には一度も出會はした事がない。加之顏の眞中が餘りに突起して居る。そうして其穴の中から時々ぷう／＼と烟を吹く。どうも咽せぽくて實に弱つた。是が人間の飮む烟草といふものである事は漸く此頃知つた。\n　此書生の掌の裏でしばらくはよい心持に坐つて居つたが、暫くすると非常な速力で運轉し始めた。書生が動くのか自分丈が動くのか分らないが無暗に眼が廻る。胸が惡くなる。到底助からないと思つて居ると、どさりと音がして眼から火が出た。夫迄は記憶して居るがあとは何の事やらいくら考へ出さうとしても分らない。\n　ふと氣が付いて見ると書生は居ない。澤山居つた兄弟が一疋も見えぬ。肝心の母親さへ姿を隱して仕舞つた。其上今迄の所とは違つて無暗に明るい。眼を明いて居られぬ位だ。果てな何でも容子が可笑いと、のそ／＼這ひ出して見ると非常に痛い。吾輩は藁の上から急に笹原の中へ棄てられたのである。\n"}});
//# sourceMappingURL=app.ec2c4027.js.map