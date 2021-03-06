import React from 'react';
import { PopoverQuestion, PopoverHintText, PopoverBody } from '.';
import cmsData from '../../cms';

export const CustomerSegments = () => {
  const {
    cseg_q_one,
    cseg_q_two,
    d_cseg_one,
    d_cseg_two,
    d_cseg_three,
    d_cseg_four,
    d_cseg_five,
  } = cmsData;

  return (
    <PopoverBody>
      <PopoverQuestion>{cseg_q_one}</PopoverQuestion>
      <PopoverQuestion>{cseg_q_two}</PopoverQuestion>
      <br />
      <PopoverHintText>{d_cseg_one}</PopoverHintText>
      <PopoverHintText>{d_cseg_two}</PopoverHintText>
      <PopoverHintText>{d_cseg_three}</PopoverHintText>
      <PopoverHintText>{d_cseg_four}</PopoverHintText>
      <PopoverHintText>{d_cseg_five}</PopoverHintText>
    </PopoverBody>
  );
};
