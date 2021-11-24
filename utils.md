## Functions

<dl>
<dt><a href="#getMIMEType">getMIMEType(filename)</a> ⇒ <code>String</code></dt>
<dd><p>Attempts to guess the MIME Content-Type of a file based on its extension.</p>
</dd>
<dt><a href="#raiseErrors">raiseErrors(error, config, request, response)</a></dt>
<dd><p>Used internally to raise HTTP errors.</p>
</dd>
<dt><a href="#renderPages.">renderPages.()</a></dt>
<dd><p>Renders a template as HTML which can be passed into Result.send.</p>
</dd>
</dl>

<a name="getMIMEType"></a>

## getMIMEType(filename) ⇒ <code>String</code>
Attempts to guess the MIME Content-Type of a file based on its extension.

**Kind**: global function  
**Returns**: <code>String</code> - (Guessed) MIME Content-Type  

| Param | Type | Description |
| --- | --- | --- |
| filename | <code>String</code> | The filename. |

<a name="raiseErrors"></a>

## raiseErrors(error, config, request, response)
Used internally to raise HTTP errors.

**Kind**: global function  

| Param | Type |
| --- | --- |
| error | <code>Number</code> | 
| config | <code>Config</code> | 
| request | <code>http.IncomingMessage</code> | 
| response | <code>http.ServerResponse</code> | 

<a name="renderPages."></a>

## renderPages.()
Renders a template as HTML which can be passed into Result.send.

**Kind**: global function  
