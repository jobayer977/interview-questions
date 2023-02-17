---
title: Which is better XML or JSON?
source: https://www.toptal.com/web/json-vs-xml-part-1
---

_JSON is best for simple applications,_ developed to satisfy simple requirements surrounding data interchange. XML is best for applications with complex requirements surrounding data interchange, such as in enterprise.

Differences between JSON and XML:
| JSON | XML |
| ---- | ---- |
| JSON doesn't use end tags | XML uses end tags |
| JSON can use arrays syntax | Normally XML can't have arrays syntax |
| JSON parse is easier | XML parse is much more difficult |

**Example of JSON:**

```javascript
{
    "name": "John",
    "age": 30,
    "cars": [
        "Ford",
        "BMW",
        "Fiat"
    ]
}
```

**Example of XML:**

```xml
<person>
    <name>John</name>
    <age>30</age>
    <cars>
        <car>Ford</car>
        <car>BMW</car>
        <car>Fiat</car>
    </cars>
</person>
```
