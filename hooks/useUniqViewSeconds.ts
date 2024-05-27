'use client'

import { useMemo } from 'react';

  /**
   * Generates an array of unique view seconds from a two-dimensional array of numbers.
   *
   * @param {number[][]} data - A two-dimensional array of numbers.
   * @return {UseUniqViewSecondsResult} An object containing a unique array of view seconds.
   */

interface UseUniqViewSecondsResult {
  uniqueViewSeconds: number[];
}

const useUniqViewSeconds = (data: number[][]): UseUniqViewSecondsResult => {

  const uniqueViewSeconds = useMemo(() => {
    const flattenedArray = data.flat();
    const uniqueArray = Array.from(new Set(flattenedArray));
    uniqueArray.sort((a, b) => a - b);
    return uniqueArray;
  }, [data]);

  return { uniqueViewSeconds };
};

export default useUniqViewSeconds;
