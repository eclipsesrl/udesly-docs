---
id: wordpress-plugin-hooks   
title: Plugin Hooks
---

Udesly plugin is now also *developer friendly*, it allows you to modify the plugin behaviour using WordPress Hooks!

## What are Hooks?

**Hooks** in WordPress essentially allow you to change or add code without editing core files. 
They are used extensively throughout WordPress and Udesly Plugin and are very useful for developers.

There are two types of hook: actions and filters.

* **Action Hooks** allow you to insert custom code at various points (wherever the hook is run).
* **Filter Hooks** allow you to manipulate and return a variable which it passes (for instance a product price).

If you want to learn more about it, give a look to the [official documentation](https://codex.wordpress.org/Plugin_API)

## Actions

These hooks below allows to run your custom code

### udesly_wp_registration_success

This action runs when a new user compiles the registration form. The user ID is passed to the hook: 

~~~
do_action( 'udesly_wp_registration_success', $user_id );
~~~

You can use it for example to send an email to the user on registration success:

~~~
function my_plugin_on_registration_success( $user_id ) {

    // Email login credentials to a newly-registered user.
    wp_new_user_notification( $user_id );

}
add_action( 'udesly_wp_registration_success', 'my_plugin_on_registration_success' );
~~~

## Filters

These hooks below allows to modify the default behaviour of the Udesly Plugin

### udesly_wp_signon_secure_cookie

This filter is used when users login into your website. On default when your users will login from your frontend they will not be logged in also in your backend, because `use secure cookie` is set to false. You can use this filter to modify this behaviour, you must return a boolean value, as extra parameter you will receive the user login (email or username)

~~~
apply_filters('udesly_wp_signon_secure_cookie', false, $user_login);
~~~

You can use it for example to use secure cookie for a specific $user_login: 

~~~
function my_plugin_wp_secure_cookie( $secure, $user_login ) {

    if ("myemail@email.com" === $user_login ) { 
        $secure = true; // set secure to true only if user made login with "myemail@email.com"
    }

    return $secure;

}
add_filter( 'udesly_wp_signon_secure_cookie', 'my_plugin_wp_secure_cookie', 10, 2 );
~~~


### udesly_wp_login_error_message

This filter is used when users fails login into your website. On default the error message is set by WordPress. You can use this filter to modify the error message, you must return a string

~~~
apply_filters('udesly_wp_login_error_message', $error_message )
~~~

For example to modify the message you can use:

~~~
function my_plugin_custom_login_error_message( $error_message ) {

    $error_message = "Ops :( wrong credentials, Try Again!";

    return $error_message;

}
add_filter( 'udesly_wp_login_error_message', 'my_plugin_custom_login_error_message' );
~~~

### udesly_wp_register_password_strength_check

This filter is used when users registers to check if the password is strong enough for your website. You can use this filter to add custom strength parameters to the user password. You must return a boolean value, and you receive the password inserted as extra parameter.

~~~
apply_filters('udesly_wp_register_password_strength_check', true, $password);
~~~

For example to add a custom check on password length you can use:

~~~
function my_plugin_custom_password_strength( $valid, $password ) {

    if ( strlen($password) < 12 ) {
        $valid = false; // block password if it has less than 12 characters
    }

    return $valid;

}
add_filter( 'udesly_wp_register_password_strength_check', 'my_plugin_custom_password_strength', 10, 2 );
~~~

### udesly_wp_register_password_strength_check_message

This filter is used when users registers and password strength check fails. You can use this filter to modify the message that will be shown. You must return a string.

~~~
apply_filters('udesly_wp_register_password_strength_check_message', __( 'The password is invalid' ) );
~~~

For example:

~~~
function my_plugin_custom_password_strength_message( $message ) {

    $message = __("Sorry your password should have at least 12 characters");

    return $message;

}
add_filter( 'udesly_wp_register_password_strength_check_message', 'my_plugin_custom_password_strength_message' );
~~~


### retrieve_password_title

This filter is used when users asks for a password reset. You can use this filter to modify the title that will be send as email. You must return a string. You receive as extra parameters $user_login and $user_data;

~~~
apply_filters( 'retrieve_password_title', $title, $user_login, $user_data );
~~~

### retrieve_password_message

This filter is used when users asks for a password reset. You can use this filter to modify the message that will be send as email. You must return a string. You receive as extra parameters $password_reset_key, $user_login and $user_data; Don't forget that to be useful this message *must* contain a link to your reset password page with Query parameters action=rp, key = $password_reset_key and login = $user_login.

~~~
apply_filters( 'retrieve_password_message', $message, $password_reset_key, $user_login, $user_data  );
~~~


For example:

~~~
function my_plugin_custom_retrieve_password_message( $message, $password_reset_key, $user_login, $user_data  ) {

    $message = __( 'Someone requested that the password be reset for the following account:' ) . "\r\n\r\n";
    $message .= network_home_url( '/' ) . "\r\n\r\n";
    $message .= sprintf( __( 'Username: %s' ), $user_login ) . "\r\n\r\n";
    $message .= __( 'If this was a mistake, just ignore this email and nothing will happen.' ) . "\r\n\r\n";
    $message .= __( 'To reset your password, visit the following address:' ) . "\r\n\r\n";

    $message .= esc_url_raw( "https://www.mywebsite.com/reset-password" . "?action=rp&key=$key&login=" . urlencode( $user_login ) ) . "\r\n";


    return $message;

}
add_filter( 'retrieve_password_message', 'my_plugin_custom_retrieve_password_message', 10, 4 );
~~~

### udesly_wp_register_password_strength_check_message

This filter is used when users asks for a password reset with an email not present in your database. You can use this filter to modify the message that will be shown. You must return a string.

~~~
apply_filters('udesly_lost_password_invalid_email_message', __( 'There is no user registered with that email address.' ))
~~~

For example:

~~~
function my_plugin_custom_invalid_lost_password_message( $message ) {

    $message = __("Sorry, invalid email");

    return $message;

}
add_filter( 'udesly_lost_password_invalid_email_message', 'my_plugin_custom_invalid_lost_password_message' );
~~~

### udesly_wp_send_form_message

This filter is used when users send a generic form, you can use this filter to modify the message sent to the email you set inside Udesly Plugin settings.
You'll receive as extra parameters the $form_data, it's an array of values sent, the values are array with fields *data* and *value*.
~~~
apply_filters('udesly_wp_send_form_message', $message, $form_data);
~~~

For example:

~~~
function my_plugin_custom_send_form_message( $message, $form_data ) {

    $message = __('Someone sent a message');

    foreach ($form_data as $data){
        if ($data['name'] !== "captchaUserResponse" ) { // don't send this field
            $message .= sanitize_key($data['name']) . ": " . sanitize_textarea_field($data['value']) . "\r\n";
        }  
    }

    return $message;

}

add_filter( 'udesly_wp_send_form_message', 'my_plugin_custom_send_form_message', 10, 2 );
~~~


### udesly_wp_send_form_headers

This filter is used when users send a generic form, you can use this filter to modify the headers sent.
~~~
apply_filters('udesly_wp_send_form_headers', $headers);
~~~


### udesly_get_term_featured_image

This filter is used after retrieving the image for the term, this function is used in elements such as Blog=Categories or Blog=Tags. You can use this function to modify the url of the current term featured image, you must return a valid url, and you receive as extra parameter the $term_id

~~~
apply_filters('udesly_get_term_featured_image', $img_url, $term_id);
~~~

### udesly_get_term_featured_image_size

This filter is used after retrieving the image for the term, this function is used in elements such as Blog=Categories or Blog=Tags. You can use this function to modify dimension of the image to get, you must return a valid dimension that can be accepted by WordPress on default it's set on "full"

~~~
apply_filters('udesly_get_term_featured_image_size', 'full');
~~~


### udesly_get_terms_args

This filter is used to modify the arguments to pass to the function [*get_terms*](https://developer.wordpress.org/reference/functions/get_terms/) of WordPress, this function is used in elements such as Blog=Categories or Blog=Tags. You can use this function to modify arguments to use. As extra parameter you get current $post_id

~~~
apply_filters('udesly_get_terms_args', $args, $post_id);
~~~


### udesly_posts_query_{posts_query_name}

This dynamic filter is used to modify arguments for the posts query named {posts_query_name}. You can add or remove extra arguments to customize even more your posts query. The arguments will be used to create a [*WP_Query*](https://developer.wordpress.org/reference/classes/wp_query/)

~~~
apply_filters("udesly_posts_query_$name", $query_arguments);
~~~

### udesly_terms_query_{terms_query_name}

This dynamic filter is used to modify arguments for the term query named {term_query_name}. You can add or remove extra arguments to customize even more your term query. The arguments will be used to create a [*WP_Term_Query](https://developer.wordpress.org/reference/classes/wp_term_query/)

~~~
apply_filters("udesly_terms_query_$name", $query_arguments);
~~~

### udesly_register_custom_post_type_args_{custom_post_type_name}

This dynamic filter is used to modify arguments for the registration of the custom post type named {custom_post_type_name}. You can add or remove extra arguments to customize even more your custom post type. The args will be passed to the WordPress function [*register_post_type*](https://codex.wordpress.org/Function_Reference/register_post_type)

~~~
 apply_filters("udesly_register_custom_post_type_args_$type", $args);
~~~

### udesly_cart_image_size

This filter is used to modify the size of the featured image of the WooCommerce Mini cart items. You must return a valid size that can be accepted by WordPress.

~~~
apply_filters('udesly_cart_image_size', 'medium');
~~~

### udesly_user_can_use_frontend_editor

This filter can be used to disable the frontend editor for some user, on default only administrator can use frontend editor. You must return a boolean.

~~~
 apply_filters('udesly_user_can_use_frontend_editor', $can);
~~~


### udesly_rules_subject_keys

This filter can be used to add more subjects to the Udesly Rules. (*e.g: If page...* )

~~~
 apply_filters('udesly_rules_subject_keys', ["page", "user", "archive"]);
~~~

### udesly_rules_options_{subject}

This filter can be used to add options for the rules of the *subject*

~~~
 apply_filters("udesly_rules_options_$subject", array());
~~~

For example this is the function used to add options for user

~~~
function my_plugin_custom_add_rules_options_for_user($options) {
        $roles = [];
        global $wp_roles;
        foreach ($wp_roles->roles as $key => $value) {
            $roles[] = " " . $value['name'];
        }
        $options['is role'] = $roles;
        $options['is logged in'] = ["."];
        $options['is not logged in'] = ["."];

        return $options;
}

add_filter( 'udesly_rules_options_user', 'my_plugin_custom_add_rules_options_for_user' );
~~~

To evaluate the rule you need to create a function named

`udesly_rule_evaluator_{subject}_{option}`

For example the function below is used to check the option is logged in of the subject user
~~~
 function udesly_rule_evaluator_user_is_logged_in() {
        return is_user_logged_in();
    }
~~~
