## Classes

<dl>
<dt><a href="#Client">Client</a></dt>
<dd><p>Used as a parameter for function calls.</p>
</dd>
<dt><a href="#Config">Config</a></dt>
<dd><p>Used internally as an object to store configuration.</p>
</dd>
<dt><a href="#Header">Header</a></dt>
<dd><p>Class used internally as a list of headers.</p>
</dd>
<dt><a href="#Result">Result</a></dt>
<dd><p>Class passed as the second parameter to route callbacks.</p>
</dd>
<dt><a href="#Routes">Routes</a></dt>
<dd><p>Object used internally as a list of routes.</p>
</dd>
<dt><a href="#Server">Server</a></dt>
<dd><p>The object used to create a web server.</p>
</dd>
</dl>

<a name="Client"></a>

## Client
Used as a parameter for function calls.

**Kind**: global class  
<a name="Config"></a>

## Config
Used internally as an object to store configuration.

**Kind**: global class  
<a name="Header"></a>

## Header
Class used internally as a list of headers.

**Kind**: global class  

* [Header](#Header)
    * [.get(header)](#Header.get) ⇒ <code>String</code>
    * [.set(header, value)](#Header.set)
    * [.remove(header)](#Header.remove)

<a name="Header.get"></a>

### Header.get(header) ⇒ <code>String</code>
Retrieves a header from the object.

**Kind**: static method of [<code>Header</code>](#Header)  
**Returns**: <code>String</code> - The value of the header.  

| Param | Type | Description |
| --- | --- | --- |
| header | <code>String</code> | The header's name. |

<a name="Header.set"></a>

### Header.set(header, value)
Adds or replaces a header in the object.

**Kind**: static method of [<code>Header</code>](#Header)  

| Param | Type | Description |
| --- | --- | --- |
| header | <code>String</code> | The header's name. |
| value | <code>String</code> | The value the header will be set to. |

<a name="Header.remove"></a>

### Header.remove(header)
Removes a header from the object.

**Kind**: static method of [<code>Header</code>](#Header)  

| Param | Type | Description |
| --- | --- | --- |
| header | <code>String</code> | The header's name. |

<a name="Result"></a>

## Result
Class passed as the second parameter to route callbacks.

**Kind**: global class  

* [Result](#Result)
    * [.send(content, [headers])](#Result.send)
    * [.write(content)](#Result.write)
    * [.end([content])](#Result.end)
    * [.head(status, [headers])](#Result.head)

<a name="Result.send"></a>

### Result.send(content, [headers])
Sends text with provided headers and ends the response.

**Kind**: static method of [<code>Result</code>](#Result)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| content | <code>String</code> |  | Content to write/return. |
| [headers] | <code>Object</code> | <code>{&quot;Content-Type&quot;: &quot;text/html&quot;}</code> | Headers to send. |

<a name="Result.write"></a>

### Result.write(content)
Sends text WITHOUT headers and DOES NOT end the response.

**Kind**: static method of [<code>Result</code>](#Result)  

| Param | Type | Description |
| --- | --- | --- |
| content | <code>String</code> | Content to write. |

<a name="Result.end"></a>

### Result.end([content])
Ends the response (with an optional message).

**Kind**: static method of [<code>Result</code>](#Result)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [content] | <code>String</code> | <code>&quot;&quot;</code> | Content to write/return. |

<a name="Result.head"></a>

### Result.head(status, [headers])
Sets status and headers.

**Kind**: static method of [<code>Result</code>](#Result)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| status | <code>Number</code> |  | Status code to return. |
| [headers] | <code>Object</code> | <code>{&quot;Content-Type&quot;: &quot;text/html&quot;}</code> | Headers to send. |

<a name="Routes"></a>

## Routes
Object used internally as a list of routes.

**Kind**: global class  

* [Routes](#Routes)
    * [.add(name, callback)](#Routes.add)
    * [.remove(name)](#Routes.remove)

<a name="Routes.add"></a>

### Routes.add(name, callback)
Assigns a function to a URL.

**Kind**: static method of [<code>Routes</code>](#Routes)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> \| <code>RegExp</code> | The URL/RegExp to bind the function to, or "*" as a fallback. |
| callback | <code>function</code> | What to call when the page is visited. |

<a name="Routes.remove"></a>

### Routes.remove(name)
Removes a URL from the database of routes.

**Kind**: static method of [<code>Routes</code>](#Routes)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> \| <code>RegExp</code> | The URL to remove from the database. |

<a name="Server"></a>

## Server
The object used to create a web server.

**Kind**: global class  
<a name="Server.run"></a>

### Server.run()
Run the web server.

**Kind**: static method of [<code>Server</code>](#Server)  
