function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6oPIPi7FssU":
        Script1();
        break;
      case "5tlVKfnXysA":
        Script2();
        break;
      case "6YMrFsYBwsM":
        Script3();
        break;
      case "5W2fneavZWM":
        Script4();
        break;
      case "6lvHzxFFQHf":
        Script5();
        break;
      case "6YaU5439uXt":
        Script6();
        break;
      case "5qUBOw7A2v4":
        Script7();
        break;
      case "6NWrZPdHHDr":
        Script8();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="game.mp3";
audio.load();
audio.play();
audio.volume=0.5;
}

function Script2()
{
  var audio = document.getElementById('bgSong');
audio.volume=0.3;

}

function Script3()
{
  var audio = document.getElementById('bgSong');
audio.volume=0.6;
}

function Script4()
{
  var audio = document.getElementById('bgSong');
audio.volume=0.10;
}

function Script5()
{
  var audio = document.getElementById('bgSongku');
audio.src="game.mp3";
audio.load();
audio.play();
audio.volume=0.0;
}

function Script6()
{
  var audio = document.getElementById('bgSongku');
audio.src="game.mp3";
audio.load();
audio.play();
audio.volume=0.6;
}

function Script7()
{
  var audio = document.getElementById('bgSongku');
audio.src="game.mp3";
audio.load();
audio.play();
audio.volume=0.10;
}

function Script8()
{
  var audio = document.getElementById('bgSongku');
audio.src="game.mp3";
audio.load();
audio.play();
audio.volume=0.3;
}

