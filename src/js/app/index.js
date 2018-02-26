import '../../less/index.less'
import NoteManager from '../mod/note-manager'
import Event from '../mod/event'
import WaterFall from '../mod/waterfall'


NoteManager.load();

$('.add-note').on('click', function() {
  NoteManager.add();
})

Event.on('waterfall', function(){
  WaterFall.init($('#content'));
})