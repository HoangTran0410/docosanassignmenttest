import {COLORS} from '../constants';

export const getStatusColor = status => {
  switch (status.toLowerCase()) {
    case 'pending':
      return COLORS.pink;
    case 'approved':
      return COLORS.green;
    case 'passed':
      return COLORS.lightGrey;
  }
};
