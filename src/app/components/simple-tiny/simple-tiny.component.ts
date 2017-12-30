import {
  Component,
  OnDestroy,
  AfterViewInit,
  EventEmitter,
  Input,
  Output
} from '@angular/core';


@Component({
  selector: 'simple-tiny',
  template: `<textarea id="{{elementId}}">{{someTxt}}</textarea>`
})
export class SimpleTinyComponent implements AfterViewInit, OnDestroy {
  @Input() elementId: String;
  @Input() someTxt: String;
  @Output() onEditorKeyup = new EventEmitter<any>();

  editor;

  
  ngAfterViewInit() {
    
    tinymce.init({
      mode: "textareas",
      selector: '#' + this.elementId,
      plugins: ['link', 'paste', 'table'],
      skin_url: '../assets/skins/pepper-grinder',
      init_instance_callback: (editor: any) => {
        editor && this.someTxt && this.editor.setContent(this.someTxt)
      },
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          const content = editor.getContent();
          this.onEditorKeyup.emit(content);
        });
      },
    });
    
  }

  insert_contents(inst){
    inst.setContent('<strong>Some contents</strong>');  
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}
