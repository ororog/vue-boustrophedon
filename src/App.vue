<template>
  <v-app>
    <v-content>
      <v-container>
        <h1>牛耕式ビューワー</h1>
        <v-layout row wrap>
          <v-flex d-flex xs12 md6 class="box">
            <v-textarea
              auto-grow
              outline
              label="原文(テキストを編集できます)"
              v-model="text">
            </v-textarea>
          </v-flex>
          <v-flex d-flex xs12 md6 class="box">
            <div class="textBoxWrap">
              <div class="label">牛耕式</div>
              <div ref="textBox" class="textBox">
              </div>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import JQuery from 'jquery'
let $ = JQuery

export default {
  name: 'App',
  mounted () {
    this.boustrophedon()
    window.addEventListener('resize', this.handleResize)
  },
  data () {
    return {
      text: `　吾輩は猫である。名前はまだ無い。
　どこで生まれたか頓と見當がつかぬ。何ても暗薄いじめじめした所でニャー／＼泣いて居た事丈は記憶して居る。吾輩はこゝで始めて人間といふものを見た。然もあとで聞くとそれは書生といふ人間で一番獰惡な種族であつたさうだ。此書生といふのは時々我々を捕へて煮て食ふといふ話である。然し其當時は何といふ考もなかつたから別段恐しいとも思はなかつた。但彼の掌に載せられてスーと持ち上げられた時何だかフハフハした感じが有つた許りである。掌の上で少し落ち付いて書生の顏を見たが所謂人間といふものゝ見始であらう。此の時妙なものだと思つた感じが今でも殘つて居る。第一毛を以て裝飾されべき筈の顏がつる／＼して丸で藥罐だ。其後猫にも大分逢つたがこんな片輪には一度も出會はした事がない。加之顏の眞中が餘りに突起して居る。そうして其穴の中から時々ぷう／＼と烟を吹く。どうも咽せぽくて實に弱つた。是が人間の飮む烟草といふものである事は漸く此頃知つた。
　此書生の掌の裏でしばらくはよい心持に坐つて居つたが、暫くすると非常な速力で運轉し始めた。書生が動くのか自分丈が動くのか分らないが無暗に眼が廻る。胸が惡くなる。到底助からないと思つて居ると、どさりと音がして眼から火が出た。夫迄は記憶して居るがあとは何の事やらいくら考へ出さうとしても分らない。
　ふと氣が付いて見ると書生は居ない。澤山居つた兄弟が一疋も見えぬ。肝心の母親さへ姿を隱して仕舞つた。其上今迄の所とは違つて無暗に明るい。眼を明いて居られぬ位だ。果てな何でも容子が可笑いと、のそ／＼這ひ出して見ると非常に痛い。吾輩は藁の上から急に笹原の中へ棄てられたのである。
　漸くの思ひで笹原を這ひ出すと向ふに大きな池がある。吾輩は池の前に坐つてどうしたらよからうと考へて見た。別に是といふ分別も出ない。暫くして泣いたら書生が又迎に來てくれるかと考へ付いた。ニャー、ニャーと試みにやつて見たが誰も來ない。其内池の上をさら／＼と風が渡つて日が暮れかゝる。腹が非常に減つて來た。泣き度ても聲が出ない。仕方がない、何でもよいから食物のある所迄あるかうと决心をしてそろりそろりと池を左りに廻り始めた。どうも非常に苦しい。そこを我慢して無理やりに這つて行くと漸くの事で何となく人間臭ひ所へ出た。此所へ這入つたら、どうにかなると思つて竹垣の崩れた穴から、とある邸内にもぐり込んだ。縁は不思議なもので、もし此竹垣が破れて居なかつたなら、吾輩は遂に路傍に餓死したかも知れんのである。一樹の蔭とはよく云つたものだ。此垣根の穴は今日に至る迄吾輩が隣家の三毛を訪問する時の通路になつて居る。偖邸へは忍び込んだものの是から先どうして善いか分らない。其内に暗くなる、腹は減る、寒さは寒し、雨が降て來るといふ始末でもう一刻も猶豫が出來なくなつた。仕方がないから兎に角明るくて暖かさうな方へ方へとあるいて行く。今から考へると其時は既に家の内に這入つてたのだ。こゝで余は彼の書生以外の人間を再び見るべき機會に遭遇したのである。第一に逢つたのがおさんである。是は前の書生より一層亂暴な方で我輩を見るや否やいきなり頸筋をつかんで表へ抛り出した。いや是は駄目だと思つたから眼をねぶつて運を天に任せて居た。然しひもじいのと寒いのにはどうしても我慢が出來ん。吾輩は再びおさんの隙を見て臺所へ這ひ上つた。すると間もなく又投げ出された。吾輩は投げ出されては這ひ上り、這ひ上つては投げ出され何でも同じ事を四五遍繰り返したのを記憶して居る。其時におさんと云ふ者はつく／″＼いやになつた。此間おさんの三馬を偸んで此返報をしてやつてから、やつと胸の痞が下りた。吾輩が最後につまみ出され樣としたときに、此家の主人が騷々しい何だといひながら出て來た。下女は吾輩をぶら下げて主人の方へ向けて此宿なしの小猫がいくら出しても出しても御臺所へ上つて來て困りますといふ。主人は鼻の下の黒い毛を撚りながら吾輩の顏を暫らく眺めて居つたが。やがてそんなら内へ置いてやれといつたまゝ奧へ這入つて仕舞つた。主人は餘り口を聞かぬ人と見えた。下女は口惜しさうに吾輩を臺所へ抛り出した。かくして吾輩は遂に此家を自分の住家と極める事にしたのである。`
    }
  },
  methods: {
    boustrophedon () {
      let textBox = $(this.$refs.textBox)
      textBox.empty()
      let currentBox = $('<div></div>')
      textBox.append(currentBox)
      for (let i = 0; i < this.text.length; i++) {
        let height = currentBox.height()
        if (height === 0) {
          currentBox.text(currentBox.text() + this.text[i])
        } else if (this.text[i] === '\n') {
          currentBox.append('<br />')
          currentBox = $('<div></div>')
          textBox.append(currentBox)
        } else {
          currentBox.text(currentBox.text() + this.text[i])
          if (currentBox.height() > height) {
            currentBox.text(currentBox.text().slice(0, -1))
            currentBox = $('<div></div>')
            textBox.append(currentBox)
            currentBox.text(this.text[i])
          }
        }
      }
    },
    handleResize () {
      this.boustrophedon()
    }
  },
  watch: {
    text () {
      this.boustrophedon()
    }
  }
}
</script>

<style>
.label {
    font-size: 12px;
}
.box {
    padding: 20px;
}
.textBoxWrap {
    border-radius: 4px;
    border: 2px solid black;
    padding: 15px;
}
.textBox {
    font-size: 15px;
    line-height: 1.3;
}
.textBox div:nth-child(even) {
    transform: rotateY( 180deg );
}
</style>
