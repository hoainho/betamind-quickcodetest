'use client'

import { useState, useEffect, useMemo, useCallback } from 'react';
import { fetchData, ApiResponse } from '@/actions/fetchViewSeconds';

// Define the shape of the hook's return value
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
