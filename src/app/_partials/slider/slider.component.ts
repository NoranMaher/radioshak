declare function require(path: string);

import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  slides: Array<{}> = [];
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 1500;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.wrap = true;
  }

  ngOnInit() {
    this.slides = [{
      image: require('../../../assets/img/slider1.jpg'),
      id: 1,  title: "Buy now and enjoy black friday with radioshack",
      subtitle: "buy one get two free on selected items"
    },
    {
      image: require('../../../assets/img/slider2.jpg'),
      id: 2,  title: "Buy now and enjoy black friday with radioshack",
      subtitle: "buy one get two free on selected items"
    },
    {
      image: require('../../../assets/img/slider3.jpg'),
      id: 2,
      title: "Buy now and enjoy black friday with radioshack",
      subtitle: "buy one get two free on selected items"
    }]
  }

}
