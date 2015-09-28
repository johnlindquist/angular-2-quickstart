System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "typescript",
  typescriptOptions: {
    emitDecoratorMetadata: true
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "app":"src"
  },
  packages: {
    "src":{
      "main":"main.ts",
      "defaultExtension":"ts",
      "format": "es6"
    }
  },
  bundles: {
    "lib/build.37.js": [
      "npm:zone.js@0.5.5",
      "npm:zone.js@0.5.5/lib/zone",
      "npm:zone.js@0.5.5/lib/core",
      "npm:zone.js@0.5.5/lib/patch/browser",
      "npm:zone.js@0.5.5/lib/keys",
      "npm:zone.js@0.5.5/lib/patch/functions",
      "npm:zone.js@0.5.5/lib/patch/promise",
      "npm:zone.js@0.5.5/lib/patch/register-element",
      "npm:zone.js@0.5.5/lib/patch/mutation-observer",
      "npm:zone.js@0.5.5/lib/patch/websocket",
      "npm:zone.js@0.5.5/lib/patch/define-property",
      "npm:zone.js@0.5.5/lib/patch/property-descriptor",
      "npm:zone.js@0.5.5/lib/patch/event-target",
      "npm:zone.js@0.5.5/lib/patch/geolocation",
      "npm:zone.js@0.5.5/lib/patch/file-reader",
      "npm:zone.js@0.5.5/lib/utils",
      "npm:reflect-metadata@0.1.2",
      "npm:reflect-metadata@0.1.2/Reflect",
      "github:jspm/nodelibs-process@0.1.1",
      "github:jspm/nodelibs-process@0.1.1/index",
      "npm:process@0.10.1",
      "npm:process@0.10.1/browser",
      "npm:angular2@2.0.0-alpha.37/router",
      "npm:angular2@2.0.0-alpha.37/angular2",
      "npm:angular2@2.0.0-alpha.37/src/core/application_tokens",
      "npm:angular2@2.0.0-alpha.37/di",
      "npm:angular2@2.0.0-alpha.37/src/core/facade/lang",
      "npm:angular2@2.0.0-alpha.37/metadata",
      "npm:angular2@2.0.0-alpha.37/change_detection",
      "npm:angular2@2.0.0-alpha.37/core",
      "npm:angular2@2.0.0-alpha.37/directives",
      "npm:angular2@2.0.0-alpha.37/forms",
      "npm:angular2@2.0.0-alpha.37/render",
      "npm:angular2@2.0.0-alpha.37/profile",
      "npm:angular2@2.0.0-alpha.37/src/core/application",
      "npm:angular2@2.0.0-alpha.37/src/core/di/metadata",
      "npm:angular2@2.0.0-alpha.37/src/core/di/decorators",
      "npm:angular2@2.0.0-alpha.37/src/core/di/forward_ref",
      "npm:angular2@2.0.0-alpha.37/src/core/di/injector",
      "npm:angular2@2.0.0-alpha.37/src/core/di/binding",
      "npm:angular2@2.0.0-alpha.37/src/core/di/key",
      "npm:angular2@2.0.0-alpha.37/src/core/di/exceptions",
      "npm:angular2@2.0.0-alpha.37/src/core/di/opaque_token",
      "npm:angular2@2.0.0-alpha.37/src/core/metadata",
      "npm:angular2@2.0.0-alpha.37/src/core/util/decorators",
      "npm:angular2@2.0.0-alpha.37/src/core/change_detection/change_detection",
      "npm:angular2@2.0.0-alpha.37/src/core/application_ref",
      "npm:angular2@2.0.0-alpha.37/src/core/services/app_root_url",
      "npm:angular2@2.0.0-alpha.37/src/core/services/url_resolver",
      "npm:angular2@2.0.0-alpha.37/src/core/compiler/component_url_mapper",
      "npm:angular2@2.0.0-alpha.37/src/core/compiler/directive_resolver",
      "npm:angular2@2.0.0-alpha.37/src/core/compiler/compiler",
      "npm:angular2@2.0.0-alpha.37/src/core/compiler/view_manager",
      "npm:angular2@2.0.0-alpha.37/src/core/compiler/query_list",
      "npm:angular2@2.0.0-alpha.37/src/core/compiler/dynamic_component_loader",
      "npm:angular2@2.0.0-alpha.37/src/core/life_cycle/life_cycle",
      "npm:angular2@2.0.0-alpha.37/src/core/compiler/element_ref",
      "npm:angular2@2.0.0-alpha.37/src/core/compiler/template_ref",
      "npm:angular2@2.0.0-alpha.37/src/core/compiler/view_ref",
      "npm:angular2@2.0.0-alpha.37/src/core/compiler/view_container_ref",
      "npm:angular2@2.0.0-alpha.37/src/core/zone/ng_zone",
      "npm:angular2@2.0.0-alpha.37/src/core/facade/async",
      "npm:angular2@2.0.0-alpha.37/src/core/directives/ng_class",
      "npm:angular2@2.0.0-alpha.37/src/core/directives/ng_for",
      "npm:angular2@2.0.0-alpha.37/src/core/directives/ng_if",
      "npm:angular2@2.0.0-alpha.37/src/core/directives/ng_non_bindable",
      "npm:angular2@2.0.0-alpha.37/src/core/directives/ng_switch",
      "npm:angular2@2.0.0-alpha.37/src/core/directives/ng_style",
      "npm:angular2@2.0.0-alpha.37/src/forms/model",
      "npm:angular2@2.0.0-alpha.37/src/forms/directives/abstract_control_directive",
      "npm:angular2@2.0.0-alpha.37/src/forms/directives/control_container",
      "npm:angular2@2.0.0-alpha.37/src/forms/directives/ng_control_name",
      "npm:angular2@2.0.0-alpha.37/src/forms/directives/ng_form_control",
      "npm:angular2@2.0.0-alpha.37/src/forms/directives/ng_model",
      "npm:angular2@2.0.0-alpha.37/src/forms/directives/ng_control",
      "npm:angular2@2.0.0-alpha.37/src/forms/directives/ng_control_group",
      "npm:angular2@2.0.0-alpha.37/src/forms/directives/ng_form_model",
      "npm:angular2@2.0.0-alpha.37/src/forms/directives/ng_form",
      "npm:angular2@2.0.0-alpha.37/src/forms/directives/default_value_accessor",
      "npm:angular2@2.0.0-alpha.37/src/forms/directives/checkbox_value_accessor",
      "npm:angular2@2.0.0-alpha.37/src/forms/directives/select_control_value_accessor",
      "npm:angular2@2.0.0-alpha.37/src/forms/directives",
      "npm:angular2@2.0.0-alpha.37/src/forms/validators",
      "npm:angular2@2.0.0-alpha.37/src/forms/directives/validators",
      "npm:angular2@2.0.0-alpha.37/src/forms/form_builder",
      "npm:angular2@2.0.0-alpha.37/src/core/render/render",
      "npm:angular2@2.0.0-alpha.37/src/core/profile/profile",
      "npm:angular2@2.0.0-alpha.37/src/core/application_common",
      "npm:angular2@2.0.0-alpha.37/src/core/facade/collection",
      "npm:angular2@2.0.0-alpha.37/src/core/reflection/reflection",
      "npm:angular2@2.0.0-alpha.37/src/core/di/type_literal",
      "npm:rx@2.5.1",
      "npm:angular2@2.0.0-alpha.37/src/core/metadata/di",
      "npm:angular2@2.0.0-alpha.37/src/core/metadata/directives",
      "npm:angular2@2.0.0-alpha.37/src/core/metadata/view",
      "npm:angular2@2.0.0-alpha.37/src/core/change_detection/jit_proto_change_detector",
      "npm:angular2@2.0.0-alpha.37/src/core/change_detection/pregen_proto_change_detector",
      "npm:angular2@2.0.0-alpha.37/src/core/change_detection/proto_change_detector",
      "npm:angular2@2.0.0-alpha.37/src/core/change_detection/differs/iterable_differs",
      "npm:angular2@2.0.0-alpha.37/src/core/change_detection/differs/default_iterable_differ",
      "npm:angular2@2.0.0-alpha.37/src/core/change_detection/differs/keyvalue_differs",
      "npm:angular2@2.0.0-alpha.37/src/core/change_detection/differs/default_keyvalue_differ",
      "npm:angular2@2.0.0-alpha.37/src/core/change_detection/interfaces",
      "npm:angular2@2.0.0-alpha.37/src/core/change_detection/parser/ast",
      "npm:angular2@2.0.0-alpha.37/src/core/change_detection/parser/lexer",
      "npm:angular2@2.0.0-alpha.37/src/core/change_detection/parser/parser",
      "npm:angular2@2.0.0-alpha.37/src/core/change_detection/parser/locals",
      "npm:angular2@2.0.0-alpha.37/src/core/change_detection/exceptions",
      "npm:angular2@2.0.0-alpha.37/src/core/change_detection/constants",
      "npm:angular2@2.0.0-alpha.37/src/core/change_detection/binding_record",
      "npm:angular2@2.0.0-alpha.37/src/core/change_detection/directive_record",
      "npm:angular2@2.0.0-alpha.37/src/core/change_detection/dynamic_change_detector",
      "npm:angular2@2.0.0-alpha.37/src/core/change_detection/change_detector_ref",
      "npm:angular2@2.0.0-alpha.37/src/core/change_detection/change_detection_util",
      "npm:angular2@2.0.0-alpha.37/src/core/compiler/view",
      "npm:angular2@2.0.0-alpha.37/src/core/compiler/element_injector",
      "npm:angular2@2.0.0-alpha.37/src/core/compiler/view_resolver",
      "npm:angular2@2.0.0-alpha.37/src/core/compiler/pipe_resolver",
      "npm:angular2@2.0.0-alpha.37/src/core/compiler/proto_view_factory",
      "npm:angular2@2.0.0-alpha.37/src/core/pipes/pipe_binding",
      "npm:angular2@2.0.0-alpha.37/pipes",
      "npm:angular2@2.0.0-alpha.37/src/core/render/api",
      "npm:angular2@2.0.0-alpha.37/src/core/compiler/view_manager_utils",
      "npm:angular2@2.0.0-alpha.37/src/core/compiler/view_pool",
      "npm:angular2@2.0.0-alpha.37/src/core/compiler/view_listener",
      "npm:angular2@2.0.0-alpha.37/src/forms/directives/shared",
      "npm:angular2@2.0.0-alpha.37/src/core/render/dom/compiler/view_loader",
      "npm:angular2@2.0.0-alpha.37/src/core/render/dom/view/shared_styles_host",
      "npm:angular2@2.0.0-alpha.37/src/core/render/dom/compiler/compiler",
      "npm:angular2@2.0.0-alpha.37/src/core/render/dom/dom_renderer",
      "npm:angular2@2.0.0-alpha.37/src/core/render/dom/dom_tokens",
      "npm:angular2@2.0.0-alpha.37/src/core/render/dom/template_cloner",
      "npm:angular2@2.0.0-alpha.37/src/core/profile/wtf_impl",
      "npm:angular2@2.0.0-alpha.37/src/core/dom/browser_adapter",
      "npm:angular2@2.0.0-alpha.37/src/core/dom/dom_adapter",
      "npm:angular2@2.0.0-alpha.37/src/core/exception_handler",
      "npm:angular2@2.0.0-alpha.37/src/core/render/dom/compiler/style_url_resolver",
      "npm:angular2@2.0.0-alpha.37/src/core/render/dom/compiler/style_inliner",
      "npm:angular2@2.0.0-alpha.37/src/core/render/xhr",
      "npm:angular2@2.0.0-alpha.37/src/core/render/xhr_impl",
      "npm:angular2@2.0.0-alpha.37/src/core/render/dom/events/event_manager",
      "npm:angular2@2.0.0-alpha.37/src/core/render/dom/events/key_events",
      "npm:angular2@2.0.0-alpha.37/src/core/render/dom/events/hammer_gestures",
      "npm:angular2@2.0.0-alpha.37/src/core/services/anchor_based_app_root_url",
      "npm:angular2@2.0.0-alpha.37/src/core/testability/testability",
      "npm:angular2@2.0.0-alpha.37/src/core/render/dom/schema/element_schema_registry",
      "npm:angular2@2.0.0-alpha.37/src/core/render/dom/schema/dom_element_schema_registry",
      "npm:angular2@2.0.0-alpha.37/src/core/profile/wtf_init",
      "npm:angular2@2.0.0-alpha.37/src/core/platform_bindings",
      "npm:angular2@2.0.0-alpha.37/src/core/reflection/reflector",
      "npm:angular2@2.0.0-alpha.37/src/core/reflection/reflection_capabilities",
      "npm:rx@2.5.1/index",
      "npm:angular2@2.0.0-alpha.37/src/core/change_detection/change_detection_jit_generator",
      "npm:angular2@2.0.0-alpha.37/src/core/change_detection/event_binding",
      "npm:angular2@2.0.0-alpha.37/src/core/change_detection/coalesce",
      "npm:angular2@2.0.0-alpha.37/src/core/change_detection/proto_record",
      "npm:angular2@2.0.0-alpha.37/src/core/change_detection/abstract_change_detector",
      "npm:angular2@2.0.0-alpha.37/src/core/change_detection/pipe_lifecycle_reflector",
      "npm:angular2@2.0.0-alpha.37/src/core/compiler/element_binder",
      "npm:angular2@2.0.0-alpha.37/src/core/render/dom/util",
      "npm:angular2@2.0.0-alpha.37/src/core/compiler/directive_lifecycle_reflector",
      "npm:angular2@2.0.0-alpha.37/src/core/render/event_config",
      "npm:angular2@2.0.0-alpha.37/src/core/pipes/pipes",
      "npm:angular2@2.0.0-alpha.37/src/core/pipes/uppercase_pipe",
      "npm:angular2@2.0.0-alpha.37/src/core/pipes/lowercase_pipe",
      "npm:angular2@2.0.0-alpha.37/src/core/pipes/async_pipe",
      "npm:angular2@2.0.0-alpha.37/src/core/pipes/json_pipe",
      "npm:angular2@2.0.0-alpha.37/src/core/pipes/date_pipe",
      "npm:angular2@2.0.0-alpha.37/src/core/pipes/number_pipe",
      "npm:angular2@2.0.0-alpha.37/src/core/pipes/limit_to_pipe",
      "npm:angular2@2.0.0-alpha.37/src/core/pipes/default_pipes",
      "npm:angular2@2.0.0-alpha.37/src/core/render/dom/compiler/compile_pipeline",
      "npm:angular2@2.0.0-alpha.37/src/core/render/dom/compiler/compile_step_factory",
      "npm:angular2@2.0.0-alpha.37/src/core/render/dom/view/proto_view_merger",
      "npm:angular2@2.0.0-alpha.37/src/core/render/dom/compiler/selector",
      "npm:angular2@2.0.0-alpha.37/src/core/render/dom/view/proto_view",
      "npm:angular2@2.0.0-alpha.37/src/core/render/dom/view/view",
      "npm:angular2@2.0.0-alpha.37/src/core/render/dom/view/fragment",
      "npm:angular2@2.0.0-alpha.37/src/core/dom/generic_browser_adapter",
      "npm:angular2@2.0.0-alpha.37/src/core/render/dom/events/hammer_common",
      "npm:angular2@2.0.0-alpha.37/src/core/testability/get_testability",
      "npm:rx@2.5.1/dist/rx",
      "npm:rx@2.5.1/dist/rx.aggregates",
      "npm:rx@2.5.1/dist/rx.async",
      "npm:rx@2.5.1/dist/rx.backpressure",
      "npm:rx@2.5.1/dist/rx.binding",
      "npm:rx@2.5.1/dist/rx.coincidence",
      "npm:rx@2.5.1/dist/rx.experimental",
      "npm:rx@2.5.1/dist/rx.joinpatterns",
      "npm:rx@2.5.1/dist/rx.sorting",
      "npm:rx@2.5.1/dist/rx.virtualtime",
      "npm:rx@2.5.1/dist/rx.testing",
      "npm:rx@2.5.1/dist/rx.time",
      "npm:angular2@2.0.0-alpha.37/src/core/change_detection/codegen_name_util",
      "npm:angular2@2.0.0-alpha.37/src/core/change_detection/codegen_logic_util",
      "npm:angular2@2.0.0-alpha.37/src/core/change_detection/codegen_facade",
      "npm:angular2@2.0.0-alpha.37/src/core/change_detection/observable_facade",
      "npm:angular2@2.0.0-alpha.37/src/core/pipes/invalid_pipe_argument_exception",
      "npm:angular2@2.0.0-alpha.37/src/core/facade/intl",
      "npm:angular2@2.0.0-alpha.37/src/core/facade/math",
      "npm:angular2@2.0.0-alpha.37/src/core/render/dom/compiler/compile_element",
      "npm:angular2@2.0.0-alpha.37/src/core/render/dom/compiler/compile_control",
      "npm:angular2@2.0.0-alpha.37/src/core/render/dom/view/proto_view_builder",
      "npm:angular2@2.0.0-alpha.37/src/core/render/dom/compiler/property_binding_parser",
      "npm:angular2@2.0.0-alpha.37/src/core/render/dom/compiler/text_interpolation_parser",
      "npm:angular2@2.0.0-alpha.37/src/core/render/dom/compiler/directive_parser",
      "npm:angular2@2.0.0-alpha.37/src/core/render/dom/compiler/view_splitter",
      "npm:angular2@2.0.0-alpha.37/src/core/render/dom/compiler/style_encapsulator",
      "npm:angular2@2.0.0-alpha.37/src/core/render/dom/view/element_binder",
      "npm:angular2@2.0.0-alpha.37/src/core/render/dom/compiler/shadow_css",
      "npm:angular2@2.0.0-alpha.37/src/router/router_outlet",
      "npm:angular2@2.0.0-alpha.37/src/router/router_link",
      "npm:angular2@2.0.0-alpha.37/src/router/instruction",
      "npm:angular2@2.0.0-alpha.37/src/router/router",
      "npm:angular2@2.0.0-alpha.37/src/router/route_registry",
      "npm:angular2@2.0.0-alpha.37/src/router/location_strategy",
      "npm:angular2@2.0.0-alpha.37/src/router/hash_location_strategy",
      "npm:angular2@2.0.0-alpha.37/src/router/path_location_strategy",
      "npm:angular2@2.0.0-alpha.37/src/router/location",
      "npm:angular2@2.0.0-alpha.37/src/router/pipeline",
      "npm:angular2@2.0.0-alpha.37/src/router/route_config_decorator",
      "npm:angular2@2.0.0-alpha.37/src/router/route_definition",
      "npm:angular2@2.0.0-alpha.37/src/router/lifecycle_annotations",
      "npm:angular2@2.0.0-alpha.37/src/router/url_parser",
      "npm:angular2@2.0.0-alpha.37/src/router/route_data",
      "npm:angular2@2.0.0-alpha.37/src/router/route_config_nomalizer",
      "npm:angular2@2.0.0-alpha.37/src/router/route_recognizer",
      "npm:angular2@2.0.0-alpha.37/src/router/route_lifecycle_reflector",
      "npm:angular2@2.0.0-alpha.37/src/router/route_config_impl",
      "npm:angular2@2.0.0-alpha.37/src/router/lifecycle_annotations_impl",
      "npm:angular2@2.0.0-alpha.37/src/router/sync_route_handler",
      "npm:angular2@2.0.0-alpha.37/src/router/path_recognizer",
      "npm:angular2@2.0.0-alpha.37/src/router/async_route_handler",
      "npm:angular2@2.0.0-alpha.37/http",
      "npm:angular2@2.0.0-alpha.37/src/http/backends/jsonp_backend",
      "npm:angular2@2.0.0-alpha.37/src/http/http",
      "npm:angular2@2.0.0-alpha.37/src/http/backends/browser_xhr",
      "npm:angular2@2.0.0-alpha.37/src/http/backends/xhr_backend",
      "npm:angular2@2.0.0-alpha.37/src/http/backends/browser_jsonp",
      "npm:angular2@2.0.0-alpha.37/src/http/backends/mock_backend",
      "npm:angular2@2.0.0-alpha.37/src/http/base_request_options",
      "npm:angular2@2.0.0-alpha.37/src/http/static_request",
      "npm:angular2@2.0.0-alpha.37/src/http/base_response_options",
      "npm:angular2@2.0.0-alpha.37/src/http/headers",
      "npm:angular2@2.0.0-alpha.37/src/http/static_response",
      "npm:angular2@2.0.0-alpha.37/src/http/interfaces",
      "npm:angular2@2.0.0-alpha.37/src/http/url_search_params",
      "npm:angular2@2.0.0-alpha.37/src/http/enums",
      "npm:angular2@2.0.0-alpha.37/src/http/http_utils"
    ]
  },

  map: {
    "angular2": "npm:angular2@2.0.0-alpha.37",
    "http": "npm:angular2@2.0.0-alpha.37/http",
    "reflect-metadata": "npm:reflect-metadata@0.1.2",
    "rx": "npm:rx@2.5.1/dist/rx",
    "typescript": "lib/typescript.js",
    "zone.js": "npm:zone.js@0.5.5",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.5.0"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.9.14"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:angular2@2.0.0-alpha.37": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "reflect-metadata": "npm:reflect-metadata@0.1.2",
      "rx": "npm:rx@2.5.1",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "zone.js": "npm:zone.js@0.5.5"
    },
    "npm:asn1.js@2.2.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:browserify-aes@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.2",
      "create-hash": "npm:create-hash@1.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-rsa@2.0.1": {
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:browserify-sign@3.0.8": {
      "bn.js": "npm:bn.js@2.2.0",
      "browserify-rsa": "npm:browserify-rsa@2.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "create-hmac": "npm:create-hmac@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@3.1.0",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@3.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:buffer-xor@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:buffer@3.5.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@2.0.1": {
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@3.1.0"
    },
    "npm:create-hash@1.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.4",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:create-hmac@1.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.9.14": {
      "browserify-aes": "npm:browserify-aes@1.0.3",
      "browserify-sign": "npm:browserify-sign@3.0.8",
      "create-ecdh": "npm:create-ecdh@2.0.1",
      "create-hash": "npm:create-hash@1.1.1",
      "create-hmac": "npm:create-hmac@1.1.3",
      "diffie-hellman": "npm:diffie-hellman@3.0.2",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@2.0.1",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:diffie-hellman@3.0.2": {
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@2.0.1",
      "randombytes": "npm:randombytes@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:elliptic@3.1.0": {
      "bn.js": "npm:bn.js@2.2.0",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:es6-promise@3.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:miller-rabin@2.0.1": {
      "bn.js": "npm:bn.js@2.2.0",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:parse-asn1@3.0.1": {
      "asn1.js": "npm:asn1.js@2.2.1",
      "browserify-aes": "npm:browserify-aes@1.0.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:public-encrypt@2.0.1": {
      "bn.js": "npm:bn.js@2.2.0",
      "browserify-rsa": "npm:browserify-rsa@2.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@3.0.1",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:randombytes@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:reflect-metadata@0.1.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:rx@2.5.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:sha.js@2.4.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:zone.js@0.5.5": {
      "es6-promise": "npm:es6-promise@3.0.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

System.import("reflect-metadata");
System.import("zone.js");