import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessagingConfigService, MESSAGING_CONFIG_SERVICE } from '../messaging-config.service';
import { MessagingService, MESSAGING_SERVICE } from '../messaging.service';
import { InputConfig } from '../types';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  config: InputConfig;
  inputForm: FormGroup;

  constructor(
    @Inject(MESSAGING_SERVICE) private messagingService: MessagingService,
    @Inject(MESSAGING_CONFIG_SERVICE) private messagingConfigService: MessagingConfigService,
    private formBuilder: FormBuilder,
  ) {
    this.config = this.messagingConfigService.config.input;

    const group: Record<string, string> = {};
    for (let field of this.messagingConfigService.config.input.fields) {
      group[field.id] = ""

    }
    this.inputForm = this.formBuilder.group(group);
  }

  ngOnInit(): void { }

  onSubmit() {
    return this.messagingService.onSend(this.inputForm.value)
  }

}
