import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ConfigService } from 'src/app/core/services/config/config.service';

@Component({
  selector: 'news-config-panel',
  templateUrl: './news-config-panel.component.html',
  styleUrls: ['./news-config-panel.component.scss']
})
export class NewsConfigPanelComponent implements OnInit {
  channels : Channel[];

  @Output() onChangedChannel = new EventEmitter<Channel>();

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.channels = this.configService.newsApi.channels;
  }

  changeChannel(channelValue) {
    const channel = this.channels.find(_chanel => _chanel.value === channelValue.value);
    this.onChangedChannel.emit(channel);
  }
}

export interface Channel {
  value: string;
  label: string;
}
