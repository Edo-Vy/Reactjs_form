const initialState = {
  mangSinhVien: [
    {
      maSV: 1,
      hoTen: "Demo",
      email: "demo@gmail.com",
      soDienThoai: "010101",
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "THEM_SINH_VIEN": {
      //Thêm sinh viên vào mảng sinh viên
      const mangSVUpdate = [...state.mangSinhVien,action.sinhVien];
      state.mangSinhVien = mangSVUpdate;
      return{...state}
      console.log(action)
    }

    default: {
      return {...state}
    }
  }
};
