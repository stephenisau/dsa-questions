"""
359. Logger Rate Limiter
https://leetcode.com/explore/featured/card/august-leetcoding-challenge/549/week-1-august-1st-august-7th/3408/
Design a logger system that receive stream of messages along with its timestamps, each message should be printed if and only if it is not printed in the last 10 seconds.

Given a message and a timestamp (in seconds granularity), return true if the message should be printed in the given timestamp, otherwise returns false.

It is possible that several messages arrive roughly at the same time.

Example:

Logger logger = new Logger();

// logging string "foo" at timestamp 1
logger.shouldPrintMessage(1, "foo"); returns true; 

// logging string "bar" at timestamp 2
logger.shouldPrintMessage(2,"bar"); returns true;

// logging string "foo" at timestamp 3
logger.shouldPrintMessage(3,"foo"); returns false;

// logging string "bar" at timestamp 8
logger.shouldPrintMessage(8,"bar"); returns false;

// logging string "foo" at timestamp 10
logger.shouldPrintMessage(10,"foo"); returns false;

// logging string "foo" at timestamp 11
logger.shouldPrintMessage(11,"foo"); returns true;
"""


class Logger:
    def __init__(self):
        self.data = {}

    def should_print_message(self, timestamp: int, message: str) -> bool:
        """
        Returns true if the message should be printed in the given timestamp, otherwise returns false.
        If this method returns false, the message will not be printed.
        The timestamp is in seconds granularity.
        """
        if message in self.data.keys():
            if self.data.get(message) + 10 > timestamp:
                return False
        self.data[message] = timestamp
        return True


from collections import deque
class Logger1:
    def __init__(self):
        self._messages = set()
        self._message_queue = deque()

    def should_print_message(self, timestamp, message):
        # if the queue has things, pull it out and check the timestamp difference
        while self._message_queue:
            msg, ts = self._message_queue[0]
            if timestamp - ts >= 10:
                self._message_queue.popleft()
                self._messages.remove(msg)
            else:
                break

        if msg not in self._messages:
            self._messages.add(msg)
            self._message_queue.append((msg, timestamp))
            return True
        else:
            return False