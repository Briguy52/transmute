import _valueSeq from './internal/_valueSeq';

/**
 * Get a Seq of the values in `subject`.
 *
 * @example
 * valueSeq(Map({ one: 1, two: 2, three: 3 }))
 * // returns Seq [ 1, 2, 3 ]
 *
 * @param  {Iterable|Object|Array} subject
 * @return {Seq}
 */
export default _valueSeq;
