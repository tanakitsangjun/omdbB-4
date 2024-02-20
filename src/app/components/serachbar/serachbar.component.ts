import { Component } from '@angular/core';
import { serachname } from '../../model/search_nomal';
import { Searchs } from '../../model/search_';
import { OmdbserviceService } from '../../service/omdbservice.service';
import { SharingdataService } from '../../service/sharingdata.service';


@Component({
  selector: 'app-serachbar',
  standalone: true,
  imports: [],
  templateUrl: './serachbar.component.html',
  styleUrl: './serachbar.component.scss'
})
export class SerachbarComponent {
  public data?: serachname;
  public data2?: Searchs;
  public array:any;
  
  constructor (private service: OmdbserviceService,private shareddata:SharingdataService){

  }
  async getdata(input: HTMLInputElement) {
    console.log(input.value);
    // this.data = undefined;
    // this.movie = undefined;

    const firstTwoChars = input.value.substring(0, 2);
    if (firstTwoChars.startsWith('tt')) {
      this.data = await this.service.getid('i=' + input.value);
    } else {
      this.data2 = await this.service.getincludname(input,1);

      for (const movie of this.data2.Search) {
        const name = input.value.toLowerCase();
        const S_name = movie.Title.toLowerCase();
        if (S_name == name) {
          this.data = await this.service.getbyfullname(input);
          this.shareddata.setSharedData(this.data2);
          this.data2 = undefined;
        }
      }
    }
    console.log(this.data);
    console.log(this.data2);
  }
}
