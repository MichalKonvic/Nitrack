# Nitriler Docs #

1. Convertion

| JS                  | JSON         |
| -------------       |-------------:|
| function(data)      | [___func](##functions) |
| class(data)              | [___class](##class)      |
| let       | [___let](##variables)     |
| const      | [___const](##variables)     |
| var       | [___var](##variables)     |

---

## functions

**CLASS FUNCTIONS ARE DOCUMENTED [HERE](##class-functions)**

```JSON
{
    "___func":{
        "___name": String,
        "___params": Array,
        "___args": Array,
        "___async": Boolean
    }
}
```
function is converted into **object**. This object has **4** parameters.

 1. `___name`:

    Is **string** and contain name of function.

 2. `__params`:

    Is **array** and contain all parameters (stored as string) that could be passed into function.

 3. `___args`:

    Is **array** and contain all args. (stored as string) of function.

 4. `___async`:

    Is **Boolean** and declare if function is asynchronous.

---

## class ##

```JSON
{
    "___class":{
        "___name": String,
        "___params": Array,
        "___async": Boolean
    }
}
```

* ## class functions ##


* ## class variables ##

---

## Variables ##

**CLASS VARIABLES ARE DOCUMENTED [HERE](##class-variables)**
