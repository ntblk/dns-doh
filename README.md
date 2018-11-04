## dns-doh

``dns-doh`` is a simple isomorphic DNS-over-HTTPS client library. This module is
a work in progress at the IETF103 hackathon and not yet for production use.

## Why?

DNS-Over-HTTPS (DOH) is new standardization work by the Internet Engineering Task Force, formalized in 
[RFC8484](https://tools.ietf.org/html/rfc8484), that suggests a mechanism for making DNS queries 
over HTTPS.  Such a technology is useful because HTTPS encrypts the 
request as it transits the network between client and DNS server, whereas "bare DNS" 
does not (the domain name being requested is sent as clear text in a normal DNS query).  
Therefore, under current DNS, network intermediaries are easily able to determine which 
services users are requesting (and to which IP addresses those service names resolve). This
information can be used by the intermediary to block (or at the very last, measure or 
catalog) access to certain services.

When the client uses DOH in combination with HTTPS (the latter common to most web queries), a
network intermediary can "see" only a resolved IP address.  This approach is privacy-preserving for
the user.  Additionally, without the "context" provided
by having "sniffed" the clear-text host name, it is more difficult for a malicious
intermediary to know which IP addresses should be blocked. 


## Synopsis

<img src="https://netblocks.org/files/netblocks-logo.png" width="200px" align="left" alt="NetBlocks" style="margin: 0.5em;" />

``dns-doh`` is a DNS-over-HTTPS client library implementing [RFC8484](https://tools.ietf.org/html/rfc8484)
that looks up hostnames and returns responses including resolved IPv4 and IPv6 addresses.  This simple
application just accepts a single domain name and echoes the results (from the configured 
set of DOH-enabled servers) to the page. 

This package is maintained as part of the 
[NetBlocks.org](https://netblocks.org) network observation framework.

## Features

* JSON wire format
* Multiple DOH-enabled DNS resolvers queried
