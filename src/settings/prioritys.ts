type TPriority = 'high' | 'medium' | 'low';

enum EPriority {
  high = 'high',
  medium = 'medium',
  low = 'low',
}

export const priorityList: TPriority[] = [
  EPriority.high,
  EPriority.medium,
  EPriority.low,
];
