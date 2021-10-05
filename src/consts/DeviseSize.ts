const DEVISE_SIZE = {
  tablet: '768px',
  laptopS: '1024px',
  laptopM: '1280px',
  sp: '414px',
};

const DEVISE_QUERY = {
  tablet: `(max-width: ${DEVISE_SIZE.tablet})`,
  laptopS: `(max-width: ${DEVISE_SIZE.laptopS})`,
  laptopM: `(max-width: ${DEVISE_SIZE.laptopM})`,
  sp: `(max-width: ${DEVISE_SIZE.sp})`,
};

export default DEVISE_QUERY;
