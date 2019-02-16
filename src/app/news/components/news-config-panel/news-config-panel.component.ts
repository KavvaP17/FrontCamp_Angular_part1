import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ConfigService } from 'src/app/core/services/config/config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'news-config-panel',
  templateUrl: './news-config-panel.component.html',
  styleUrls: ['./news-config-panel.component.scss']
})
export class NewsConfigPanelComponent implements OnInit {
  channels : Channel[];
  selectedChannel: string;
  @Input() source: string;
  @Output() onChangedChannel = new EventEmitter<Channel>();


  constructor(private configService: ConfigService,
              private router: Router) { }

  ngOnInit() {
    this.channels = this.configService.newsApi.channels;
    if (this.source) {
      this.selectedChannel = this.channels.find(channel => channel.label === this.source).value;
    } else {
      this.selectedChannel = this.channels[0].value;
    }
    this.router.navigate(['/news'], { queryParams: { source: this.selectedChannel}});
  }

  changeChannel(channelValue) {
    this.router.navigate(['/news'], { queryParams: { source: channelValue.value}});
  }
}

export interface Channel {
  value: string;
  label: string;
}
