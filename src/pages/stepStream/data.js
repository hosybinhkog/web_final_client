import welcome_streamer from '../../assets/images/defaultThumbnailBlog.jpg'
import start_stream from '../../assets/images/streamerManage.jpg'
import create_roomstream from '../../assets/images/create_livestream.jpg'
import page_stream from '../../assets/images/page_stream.jpg'
import obs from '../../assets/images/obs_startstream.jpg'
import sharing_camera from '../../assets/images/select_option_camera.jpg'
import record_live from '../../assets/images/obs_startstream.jpg'
import end_stream from '../../assets/images/end_stream.jpg'
import upload_record from '../../assets/images/upload_record.png'
import thanks from '../../assets/images/hinh-anh-cam-on.jpg'

const dataDigitalBestSeller = [
  {
    id: 1,
    title: 'Chào mừng bạn đến với cộng đồng Streamer của chúng tôi',
    category: 'Chúng tôi sẽ hướng dẫn bạn cách thức để bắt đầu một buổi Stream',
    linkObs: 'Tải OBS',
    linkImg: welcome_streamer,
  },
  {
    id: 2,
    title: 'Step 1: Streammer vào trang StreamerManage',
    category: 'Click button bắt đầu Stream để tiến hành tạo buổi một Stream',
    linkImg: start_stream,
  },
  {
    id: 3,
    title: 'Step 2: Streammer được truy cập vào trang Create Room Stream',
    category:
      'Streamer cần nhập thông tin cần thiết của buổi stream vào trong Form và nhấn button Create livestream',
    linkImg: create_roomstream,
  },
  {
    id: 4,
    title: 'Step 3: Trang Streaming',
    category:
      'Sau khi tạo buổi livestream thành công Streamer sẽ được chuyển sang trang Livestream',
    linkImg: page_stream,
  },
  {
    id: 5,
    title: 'Step 4: Setup Obs',
    category:
      'Streamer sử dụng phần mềm OBS để cấu hình màn hình stream theo ý mình ( chèn thêm camera vào màn hình screen,...) và sau đó bật chế độ Start Virtuaral Camera',
    linkImg: obs,
  },
  {
    id: 6,
    title: 'Step 5: Select Camera on Streaming',
    category:
      'Streamer chọn loại share màn hình OBS hoặc sử dụng camera ở trang Streaming',
    linkImg: sharing_camera,
  },
  {
    id: 7,
    title: 'Step 6: Setup path save file Record Stream',
    category:
      'Streamer phải cấu hình đường dẫn lưu file Record trong OBS. Và tiến hành record trên OBS',
    linkImg: record_live,
  },
  {
    id: 8,
    title: 'Step 7: Finish Stream',
    category:
      'Trước khi kết thúc stream, Streamer phải ngừng record và lưu file record vào trong máy. Sau đó click button End để kết thúc buổi Stream',
    linkImg: end_stream,
  },
  {
    id: 9,
    title: 'Step 8: Upload video Stream',
    category:
      'Sau khi Streamer kết thúc buổi live sẽ được chuyển đến trang upload video đã stream vừa rồi và tiến hành upload file record theo yêu cầu',
    linkImg: upload_record,
  },
  {
    id: 10,
    title: 'Chúc các bạn thành công với đam mê mà mình đã chọn',
    category:
      'Chúng tôi xin chân thành gửi lời cảm ơn đến các bạn vì đã chọn PBA TV để đồng hành và phát triển công đồng Stream',
    linkImg: thanks,
  },
]
export default dataDigitalBestSeller
