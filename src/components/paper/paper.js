import PaperStyle from "./style";
import PropTypes from 'prop-types';

const Paper = ({ children }) => <PaperStyle>{children}</PaperStyle>;

Paper.prototype = {
  children: PropTypes.node,
}

export { Paper };