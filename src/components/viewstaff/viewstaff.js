import React, { Component } from "react";
import ReactPaginate from 'react-paginate';
import "./viewstaff.css";

class Viewstaff extends Component {
//   receivedData() {
//         .then(res => {

//             const data = res.data;
//             const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
//             const postData = slice.map(pd => <React.Fragment>
//                 <p>{pd.title}</p>
//                 <img src={pd.thumbnailUrl} alt=""/>
//             </React.Fragment>)

//             this.setState({
//                 pageCount: Math.ceil(data.length / this.state.perPage),
               
//                 postData
//             })
//         });
// }
// handlePageClick = (e) => {
//     const selectedPage = e.selected;
//     const offset = selectedPage * this.state.perPage;

//     this.setState({
//         currentPage: selectedPage,
//         offset: offset
//     }, () => {
//         this.receivedData()
//     });

// };

// componentDidMount() {
//     this.receivedData()
// }

  render() {
    return (
      <section class="u-clearfix sectionviewstaff" id="sec-c6a2">
        <div class="u-clearfix u-sheet u-sheet-1">
          <div class="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
            <div class="u-layout">
              <div class="u-layout-row">
                <div
                  class="u-align-left u-container-style u-image u-layout-cell u-size-21 u-image-1"
                  data-image-width="650"
                  data-image-height="1080"
                >
                  <div class="u-container-layout u-container-layout-1"></div>
                </div>
                <div class="u-container-style u-layout-cell u-size-39 u-layout-cell-2">
                  <div class="u-container-layout u-container-layout-2">
                    <h4 class="u-text u-text-default-lg u-text-default-md u-text-default-xl u-text-palette-1-dark-1 u-text-1">
                      พนักงานสถานประกอบการของคุณ
                    </h4>
                    <div class="u-border-2 u-border-grey-15 u-line u-line-horizontal u-line-1"></div>
                    <p class="u-small-text u-text u-text-default u-text-variant u-text-2">
                      จำนวนพนักงานทั้งหมด : 0
                    </p>
                    <div class="u-container-style u-expanded-width-sm u-expanded-width-xs u-grey-10 u-group u-radius-5 u-shape-round u-group-1">
                      <div class="u-container-layout u-container-layout-3">
                        <div class="u-expanded-height u-grey-40 u-radius-5 u-shape u-shape-round u-shape-1"></div>
                        <p class="u-custom-font u-font-roboto u-text u-text-default u-text-3">
                          นายรัชชวัสส์ วิลัยรักษ์
                        </p>
                        <p class="u-custom-font u-font-roboto u-text u-text-default u-text-4">
                          ผู้จัดกา​รร้าน
                        </p>
                        <img
                          class="u-image u-image-circle u-preserve-proportions u-image-2"
                          src="../../assets/img/rooftop.png"
                          alt=""
                          data-image-width="153"
                          data-image-height="206"
                        />
                        <p class="u-custom-font u-font-roboto u-text u-text-default u-text-5">
                          วัคซีนเข็มที่สอง
                        </p>
                        <p class="u-custom-font u-font-roboto u-text u-text-default u-text-6">
                          Astrazeneca
                        </p>
                        <p class="u-custom-font u-font-roboto u-text u-text-default u-text-7">
                          Astrazeneca
                        </p>
                        <p class="u-custom-font u-font-roboto u-text u-text-default u-text-8">
                          วัคซีนเข็มที่หนึ่ง
                        </p>
                      </div>
                    </div>
                    <div class="u-container-style u-expanded-width-sm u-expanded-width-xs u-grey-10 u-group u-radius-5 u-shape-round u-group-2">
                      <div class="u-container-layout u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xl u-container-layout-4">
                        <div class="u-expanded-height u-grey-40 u-radius-5 u-shape u-shape-round u-shape-2"></div>
                      </div>
                    </div>
                    <div class="u-container-style u-expanded-width-xl u-grey-10 u-group u-radius-5 u-shape-round u-group-3">
                      <div class="u-container-layout u-container-layout-5">
                        <div class="u-grey-40 u-radius-5 u-shape u-shape-round u-shape-3"></div>
                      </div>
                    </div>
                    <div class="u-container-style u-expanded-width-sm u-expanded-width-xs u-grey-10 u-group u-radius-5 u-shape-round u-group-4">
                      <div class="u-container-layout u-container-layout-6">
                        <div class="u-grey-40 u-radius-5 u-shape u-shape-round u-shape-4"></div>
                      </div>
                    </div>
                    <div className=" ">
                    <nav aria-label="Page navigation example">
                      <ul class="pagination justify-content-center">
                        <li class="page-item disabled">
                          <a class="page-link" href="#" tabindex="-1">
                            Previous
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            Next
                          </a>
                        </li>
                      </ul>
                    </nav>
                    <a
                      href="https://nicepage.com/k/arabic-style-html-templates"
                      class="u-btn u-btn-round u-button-style u-radius-5 u-btn-1"
                    >
                      เพิ่มพนักงาน
                    </a>
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Viewstaff;
