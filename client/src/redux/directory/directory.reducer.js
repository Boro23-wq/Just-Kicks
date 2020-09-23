const INITIAL_STATE = {
  sections: [
    {
      title: 'nike',
      imageUrl:
        'https://i.pinimg.com/originals/15/c2/01/15c2017f3f78bcd87e9d30e104f7eab9.gif',
      id: 1,
      linkUrl: 'shop/nike',
    },
    {
      title: 'adidas',
      imageUrl:
        'https://i1.wp.com/hypebeast.com/wp-content/blogs.dir/6/files/2016/08/adidas-nmd-r1-white-black-reflective-01.gif?quality=95&w=1170',
      id: 2,
      linkUrl: 'shop/adidas',
    },
    {
      title: 'converse',
      imageUrl:
        'https://i.pinimg.com/originals/5f/ce/0b/5fce0b7687e6fcc22302a9ac05e55366.gif',
      id: 3,
      linkUrl: 'shop/converse',
    },
    {
      title: 'airjordan',
      imageUrl:
        'https://weartesters.com/wp-content/uploads/2016/08/These-Two-Air-Jordan-1s-Ditch-the-Iconic-Wings-Logo-3.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/air%20jordan',
    },
    {
      title: 'vans',
      imageUrl:
        'https://i.pinimg.com/originals/4d/1f/69/4d1f69a73dcfd91caa98b7b24110eda0.gif',
      size: 'large',
      id: 5,
      linkUrl: 'shop/vans',
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
