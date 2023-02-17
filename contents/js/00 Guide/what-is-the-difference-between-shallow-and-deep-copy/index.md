---
title: What is the difference between Shallow and Deep copy
---

**Shallow Copy:** Shallow copy is a bitwise copy of an object. A new object is created that has an exact copy of the values in the original object. If any of the fields of the object are references to other objects, just the reference addresses are copied i.e., only the memory address is copied.

```javascript
var empDetails = {
	name: 'John',
	age: 25,
	expertise: 'Software Developer'
};
```

to create a duplicate

```javascript
var empDetailsShallowCopy = empDetails; //Shallow copying!
```

if we change some property value in the duplicate one like this:

```javascript
empDetailsShallowCopy.name = 'Johnson';
```

The above statement will also change the name of empDetails, since we have a shallow copy. That means we're losing the original data as well.

**Deep copy:** A deep copy copies all fields, and makes copies of dynamically allocated memory pointed to by the fields. A deep copy occurs when an object is copied along with the objects to which it refers.

```javascript
var empDetails = {
	name: 'John',
	age: 25,
	expertise: 'Software Developer'
};
```

Create a deep copy by using the properties from the original object into new variable

```javascript
var empDetailsDeepCopy = {
	name: empDetails.name,
	age: empDetails.age,
	expertise: empDetails.expertise
};
```

Now if you change empDetailsDeepCopy.name, it will only affect empDetailsDeepCopy & not empDetails
