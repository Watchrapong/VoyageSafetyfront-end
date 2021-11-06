import React, { Component } from "react";
import { server, YES } from "../../constants";
import { httpClient } from "../../utils/HttpClient";
import { WaveLoading } from "react-loadingg";
import Carousel from "react-bootstrap/Carousel";
import "./myestablishment.css";

class Myestablishment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      data: null,
      arrImg: [],
    };
  }

  componentDidMount() {
    try {
      this.setState({ isFetching: true });
      if (localStorage.getItem(server.LOGIN_PASSED) == YES) {
        let token = localStorage.getItem("Token");
        httpClient
          .get(server.LOGIN_USER, {
            headers: { Authorization: `Authorization ${token}` },
          })
          .then((result) => {
            const data = result.data.result;
            httpClient
              .get(`${server.MYESTABLISHMENT}/${data.UserId}`)
              .then((response) => {
                this.setState({
                  data: response.data.result,
                  arrImg: response.data.arrImg,
                  isLoading: false,
                });
              });
          });
      } else {
      }
    } catch (e) {}
  }

  render() {
    const { data, arrImg, isFetching } = this.state;
    return (
      isFetching != false &&
      data == null && (<WaveLoading />) || (
        <div>
          <section
            className="u-align-center u-clearfix myestablishment-section"
            id="sec-ee68"
          >
            <div className="u-clearfix u-sheet u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xl u-sheet-1">
              <div className="u-expanded-width u-tabs u-tabs-1">
                <ul
                  className="u-border-1 u-border-grey-25 u-tab-list u-unstyled"
                  role="tablist"
                >
                  <li className="u-tab-item" role="presentation">
                    <a
                      className="active u-active-white u-border-2 u-border-active-grey-15 u-border-hover-grey-15 u-border-no-bottom u-button-style u-tab-link u-text-active-palette-2-base u-text-hover-black u-tab-link-1"
                      id="link-tab-0da5"
                      href=""
                      role="tab"
                      aria-controls="tab-0da5"
                      aria-selected="true"
                    >
                      ร้านค้าของฉัน
                    </a>
                  </li>
                </ul>
                <div className="u-tab-content">
                  <div
                    className="u-container-style u-tab-active u-tab-pane u-white u-tab-pane-1"
                    id="tab-0da5"
                    role="tabpanel"
                    aria-labelledby="link-tab-0da5"
                  >
                    <div className="u-container-layout u-container-layout-1">
                      <div className="u-expanded-width-xs u-image u-image-default u-image-1">
                      <Carousel fade>
                              {arrImg.map((item) => (
                                <Carousel.Item interval={1300}>
                                  <img
                                    src={
                                      item.Img ||
                                      "https://via.placeholder.com/700x350"
                                    }
                                    data-image-width={2836}
                        data-image-height={1875}
                                    alt="mainImage"
                                    
                                  />
                                </Carousel.Item>
                              ))}
                            </Carousel></div>
                      <h4 className="u-text u-text-1">รายละเอียดสถานที่</h4>
                      <p className="u-text u-text-2">{data != null && (data.Description) || ""}</p>
                      <p className="u-text u-text-3">
                      {data != null && (`${data.Address} ${data.District} ${data.Province} ${data.PostCode}`) || ""}
                      </p>
                      <a
                      onClick={() => this.props.history.push(`/detail/${data.EstId}`)}
                        href=""
                        className="u-btn u-button-style u-none u-text-hover-palette-2-base u-text-palette-1-base u-btn-1"
                      >
                        ไปที่ร้าน&nbsp;
                        <span className="u-icon">
                          <svg
                            className="u-svg-content"
                            viewBox="0 -32 426.66667 426"
                            style={{ width: "1em", height: "1em" }}
                          >
                            <path d="m213.332031 181.667969c0 4.265625-1.277343 8.53125-3.625 11.730469l-106.667969 160c-3.839843 5.761718-10.238281 9.601562-17.707031 9.601562h-64c-11.730469 0-21.332031-9.601562-21.332031-21.332031 0-4.269531 1.28125-8.535157 3.625-11.734375l98.773438-148.265625-98.773438-148.269531c-2.34375-3.199219-3.625-7.464844-3.625-11.730469 0-11.734375 9.601562-21.335938 21.332031-21.335938h64c7.46875 0 13.867188 3.839844 17.707031 9.601563l106.667969 160c2.347657 3.199218 3.625 7.464844 3.625 11.734375zm0 0" />
                            <path d="m426.667969 181.667969c0 4.265625-1.28125 8.53125-3.628907 11.730469l-106.664062 160c-3.839844 5.761718-10.242188 9.601562-17.707031 9.601562h-64c-11.734375 0-21.335938-9.601562-21.335938-21.332031 0-4.269531 1.28125-8.535157 3.628907-11.734375l98.773437-148.265625-98.773437-148.269531c-2.347657-3.199219-3.628907-7.464844-3.628907-11.730469 0-11.734375 9.601563-21.335938 21.335938-21.335938h64c7.464843 0 13.867187 3.839844 17.707031 9.601563l106.664062 160c2.347657 3.199218 3.628907 7.464844 3.628907 11.734375zm0 0" />
                          </svg>
                        </span>
                      </a>
                      <a
                      onClick={() => this}
                        href=""
                        className="u-btn u-btn-round u-button-style u-hover-palette-1-light-1 u-palette-1-base u-radius-6 u-btn-2"
                      >
                        แก้ไขข้อมูลร้านค้า
                      </a>
                      <a
                      onClick={() => this.props.history.push(`/viewstaff/${data.EstId}`)}
                        href=""
                        className="u-btn u-btn-round u-button-style u-hover-palette-1-light-1 u-palette-1-base u-radius-6 u-btn-3"
                      >
                        รายชื่อบุคลากร
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )
    );
  }
}

export default Myestablishment;
