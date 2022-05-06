import { Timestamp } from 'firebase/firestore';
import {
  formatFirebaseDateWithHours,
  formatFirebaseDateWithoutHours,
} from './convertTime';

describe('convertTime', () => {
  it('should return correct date with hours', () => {
    const timestamp: Timestamp = new Timestamp(1651768396, 0);
    let expected: string;
    
    // fix for different timezones on CI
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (process.env.NODE_ENV === 'ci') {
      expected = '5.05.2022, 16:33';
    }
    expected = '5.05.2022, 18:33';

    const result = formatFirebaseDateWithHours(timestamp);
    expect(result).toEqual(expected);
  });

  it('should return correct date without hours', () => {
    const timestamp: Timestamp = new Timestamp(1651768396, 0);
    const expected = '5.05.2022';
    const result = formatFirebaseDateWithoutHours(timestamp);
    expect(result).toEqual(expected);
  });
});
