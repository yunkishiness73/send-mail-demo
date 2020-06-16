//Đây là thư viện mình dùng để gửi mail nè
const nodemailer = require('nodemailer');

// Đây là để xác thực tài khoản, ở đây tao sử dụng
// gmail để gửi đến những tài khoản mail khác
// Mày cần chỉnh chỗ user và pass bằng địa chỉ email của Mày
//EX:
// user: baobao@gmail.com
// pass: bao6969
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'baobao@gmail.com',
        pass: 'bao6969'
    }
});


//cấu hình thông tin email
const mailConfigs = {
    from: 'baobao@gmail.com', //chỗ này sử dụng cái địa chỉ đã xác thực lúc ban đầu, là email baobao@gmail.com luôn nha
    to: 'diachimailcanguitoi@gmail.com', //địa chỉ mail cần gửi tới nè
    subject: 'ĐÂY LÀ TIÊU ĐỀ EMAIL',
    text: `NỘI DUNG EMAIL, NẾU DÙNG CÁCH NÀY THÌ NÓ KO CÓ MÀU MÈ ĐẸP ĐẼ`,
    html: `<b>ĐÂY CŨNG LÀ NỘI DUNG EMAIL, NHƯNG MÌNH CÓ THỂ SỬ DỤNG THẺ HTML ĐỂ ĐỊNH DẠNG CHO ĐẸP HƠN</b>` //nếu dùng cách này thì nó sẽ override lại cái trên nha
}

//
transporter.sendMail(mailConfigs, function (err, info) {
    if (err) {
        console.log(err);
    } else {
        console.log('Email sent ' + info.response);
    }
})