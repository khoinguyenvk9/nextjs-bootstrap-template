export const emailPattern = {
  value:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  message: 'Please enter a valid email',
}

export const phonePattern = {
  value: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
  message: 'Please enter a valid phone number',
}

export const nameMethod = (e: any) => {
  const nameRegexKeyPress =
    /[A-Za-zÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]\w?\s?$/
  if (!nameRegexKeyPress.test(e.key)) {
    e.preventDefault()
  }
}

export const phoneMethod = (e: any) => {
  const phoneRegexKeyPress = /[0-9]+/g
  if (!phoneRegexKeyPress.test(e.key)) {
    e.preventDefault()
  }
}

export const nonAccentVietnameseName = (name: string) => {
  name = name.replace(/[0-9]/g, '')
  name = name.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  name = name.toUpperCase()
  return name
}

