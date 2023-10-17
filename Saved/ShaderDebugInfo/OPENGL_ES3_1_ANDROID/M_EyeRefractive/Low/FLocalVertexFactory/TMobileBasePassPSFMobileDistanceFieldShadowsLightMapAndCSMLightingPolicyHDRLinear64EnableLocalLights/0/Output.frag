// ! M_EyeRefractive/Low/FLocalVertexFactory/TMobileBasePassPSFMobileDistanceFieldShadowsLightMapAndCSMLightingPolicyHDRLinear64EnableLocalLights/0/MobileBasePassPixelShader.usf:Main
// Compiled by ShaderConductor
// @Inputs: f4;10:in_var_TEXCOORD10,f4;11:in_var_TEXCOORD11,f4;0:in_var_TEXCOORD0,f4;4:in_var_TEXCOORD4,f4;8:in_var_TEXCOORD8
// @Outputs: f4;0:out_Target0,f1;1:out_Target1
// @PackedUB: View(0): View_ViewToClip(128,16),View_ViewForward(264,3),View_ViewRectMin(512,4),View_ViewSizeAndInvSize(516,4),View_PreExposure(546,1),View_SkyLightColor(748,4),View_ReflectionCubemapMaxMip(786,1),View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight(792,3)
// @PackedUB: MobileReflectionCapture(1): MobileReflectionCapture_Params(0,4)
// @PackedUB: Primitive(2): Primitive_Flags(0,1)
// @PackedUB: MobileBasePass(3): MobileBasePass_Forward_NumLocalLights(52,1),MobileBasePass_Forward_CulledGridSize(56,3),MobileBasePass_Forward_LightGridPixelSizeShift(60,1),MobileBasePass_Forward_LightGridZParams(64,3)
// @PackedUB: PrecomputedLightingBuffer(4): PrecomputedLightingBuffer_StaticShadowMapMasks(0,4),PrecomputedLightingBuffer_InvUniformPenumbraSizes(4,4),PrecomputedLightingBuffer_LightMapScale(16,8),PrecomputedLightingBuffer_LightMapAdd(24,8)
// @PackedUB: MobileDirectionalLight(5): MobileDirectionalLight_DirectionalLightColor(0,4),MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition(4,4),MobileDirectionalLight_DirectionalLightShadowSize(8,4),MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale(12,4),MobileDirectionalLight_DirectionalLightShadowDistances(16,4),MobileDirectionalLight_DirectionalLightScreenToShadow(20,64),MobileDirectionalLight_DirectionalLightShadowMapChannelMask(84,1)
// @PackedUB: Material(6): Material_PreshaderBuffer_0(0,4),Material_PreshaderBuffer_1(4,4),Material_PreshaderBuffer_3(12,4),Material_PreshaderBuffer_5(20,4),Material_PreshaderBuffer_6(24,4),Material_PreshaderBuffer_8(32,4),Material_PreshaderBuffer_9(36,4),Material_PreshaderBuffer_10(40,4),Material_PreshaderBuffer_11(44,4),Material_PreshaderBuffer_12(48,4),Material_PreshaderBuffer_13(52,4),Material_PreshaderBuffer_14(56,4),Material_PreshaderBuffer_15(60,4),Material_PreshaderBuffer_16(64,4),Material_PreshaderBuffer_18(72,4),Material_PreshaderBuffer_19(76,4),Material_PreshaderBuffer_20(80,4),Material_PreshaderBuffer_22(88,4),Material_PreshaderBuffer_24(96,4),Material_PreshaderBuffer_25(100,4),Material_PreshaderBuffer_26(104,4),Material_PreshaderBuffer_28(112,4),Material_PreshaderBuffer_29(116,4),Material_PreshaderBuffer_30(120,4),Material_PreshaderBuffer_31(124,4),Material_PreshaderBuffer_32(128,4),Material_PreshaderBuffer_33(132,4)
// @PackedUBCopies: 0:128-0:h:0:16,0:264-0:m:0:3,0:512-0:m:4:4,0:516-0:h:16:4,0:546-0:h:20:1,0:748-0:h:24:4,0:786-0:m:8:1,0:792-0:h:28:3,1:0-1:h:0:4,2:0-2:u:0:1,3:52-3:u:0:1,3:56-3:i:0:3,3:60-3:u:4:1,3:64-3:h:0:3,4:0-4:h:0:4,4:4-4:h:4:4,4:16-4:m:0:8,4:24-4:m:8:8,5:0-5:m:0:4,5:4-5:m:4:4,5:8-5:m:8:4,5:12-5:m:12:4,5:16-5:m:16:4,5:20-5:h:0:64,5:84-5:u:0:1,6:0-6:h:0:4,6:4-6:h:4:4,6:12-6:h:8:4,6:20-6:h:12:4,6:24-6:h:16:4,6:32-6:h:20:4,6:36-6:h:24:4,6:40-6:h:28:4,6:44-6:h:32:4,6:48-6:h:36:4,6:52-6:h:40:4,6:56-6:h:44:4,6:60-6:h:48:4,6:64-6:h:52:4,6:72-6:h:56:4,6:76-6:h:60:4,6:80-6:h:64:4,6:88-6:h:68:4,6:96-6:h:72:4,6:100-6:h:76:4,6:104-6:h:80:4,6:112-6:h:84:4,6:116-6:h:88:4,6:120-6:h:92:4,6:124-6:h:96:4,6:128-6:h:100:4,6:132-6:h:104:4
// @Samplers: MobileBasePass_Forward_ForwardLocalLightBuffer(0:1),MobileBasePass_Forward_NumCulledLightsGrid(1:1),MobileBasePass_Forward_CulledLightDataGrid(2:1),MobileReflectionCapture_Texture(3:1[MobileReflectionCapture_TextureSampler]),LightmapResourceCluster_LightMapTexture(4:1[LightmapResourceCluster_LightMapSampler]),LightmapResourceCluster_StaticShadowTexture(5:1[LightmapResourceCluster_StaticShadowTextureSampler]),MobileDirectionalLight_DirectionalLightShadowTexture(6:1[MobileDirectionalLight_DirectionalLightShadowSampler]),Material_Texture2D_0(7:1[Material_Texture2D_0Sampler]),Material_Texture2D_1(8:1[Material_Texture2D_1Sampler]),Material_Texture2D_2(9:1[Material_Texture2D_2Sampler]),Material_Texture2D_3(10:1[Material_Texture2D_3Sampler]),Material_Texture2D_4(11:1[Material_Texture2D_4Sampler]),Material_Texture2D_5(12:1[Material_Texture2D_5Sampler]),Material_Texture2D_6(13:1[Material_Texture2D_6Sampler]),Material_Texture2D_7(14:1[Material_Texture2D_7Sampler]),Material_Texture2D_8(15:1[Material_Texture2D_8Sampler]),Material_Texture2D_9(16:1[Material_Texture2D_9Sampler])
#version 320 es
#if defined(GL_EXT_control_flow_attributes)
#define out_var_SV_Target1 out_Target1
#define out_var_SV_Target0 out_Target0
#define in_var_TEXCOORD8 in_TEXCOORD8
#define in_var_TEXCOORD4 in_TEXCOORD4
#define in_var_TEXCOORD0 in_TEXCOORD0
#define in_var_TEXCOORD11 in_TEXCOORD11
#define in_var_TEXCOORD10 in_TEXCOORD10
#extension GL_EXT_control_flow_attributes : require
#define SPIRV_CROSS_FLATTEN [[flatten]]
#define SPIRV_CROSS_BRANCH [[dont_flatten]]
#define SPIRV_CROSS_UNROLL [[unroll]]
#define SPIRV_CROSS_LOOP [[dont_unroll]]
#else
#define SPIRV_CROSS_FLATTEN
#define SPIRV_CROSS_BRANCH
#define SPIRV_CROSS_UNROLL
#define SPIRV_CROSS_LOOP
#endif
precision mediump float;
precision highp int;

#define View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight (pc0_h[7].xyz)
#define View_ReflectionCubemapMaxMip (pc0_m[2].x)
#define View_SkyLightColor (pc0_h[6])
#define View_PreExposure (pc0_h[5].x)
#define View_ViewSizeAndInvSize (pc0_h[4])
#define View_ViewRectMin (pc0_m[1])
#define View_ViewForward (pc0_m[0].xyz)
#define View_ViewToClip (mat4(pc0_h[0 + 0].xyzw,pc0_h[0 + 1].xyzw,pc0_h[0 + 2].xyzw,pc0_h[0 + 3].xyzw))
#define SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler ps3
#define SPIRV_Cross_CombinedLightmapResourceCluster_LightMapTextureLightmapResourceCluster_LightMapSampler ps4
#define SPIRV_Cross_CombinedLightmapResourceCluster_StaticShadowTextureLightmapResourceCluster_StaticShadowTextureSampler ps5
#define SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler ps6
#define SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler ps7
#define SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler ps8
#define SPIRV_Cross_CombinedMaterial_Texture2D_2Material_Texture2D_2Sampler ps9
#define SPIRV_Cross_CombinedMaterial_Texture2D_3Material_Texture2D_3Sampler ps10
#define SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler ps11
#define SPIRV_Cross_CombinedMaterial_Texture2D_5Material_Texture2D_5Sampler ps12
#define SPIRV_Cross_CombinedMaterial_Texture2D_6Material_Texture2D_6Sampler ps13
#define SPIRV_Cross_CombinedMaterial_Texture2D_7Material_Texture2D_7Sampler ps14
#define SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler ps15
#define SPIRV_Cross_CombinedMaterial_Texture2D_9Material_Texture2D_9Sampler ps16
uniform mediump vec4 pc0_m[3];
uniform highp vec4 pc0_h[8];


#define MobileReflectionCapture_Params (pc1_h[0])
uniform highp vec4 pc1_h[1];


#define Primitive_Flags (pc2_u[0].x)
uniform uvec4 pc2_u[1];


#define MobileBasePass_Forward_LightGridZParams (pc3_h[0].xyz)
#define MobileBasePass_Forward_LightGridPixelSizeShift (pc3_u[1].x)
#define MobileBasePass_Forward_CulledGridSize (pc3_i[0].xyz)
#define MobileBasePass_Forward_NumLocalLights (pc3_u[0].x)
uniform highp vec4 pc3_h[1];
uniform ivec4 pc3_i[1];
uniform uvec4 pc3_u[2];


#define PrecomputedLightingBuffer_LightMapAdd(Offset) (pc4_m[2 + int(Offset)])
#define PrecomputedLightingBuffer_LightMapScale(Offset) (pc4_m[0 + int(Offset)])
#define PrecomputedLightingBuffer_InvUniformPenumbraSizes (pc4_h[1])
#define PrecomputedLightingBuffer_StaticShadowMapMasks (pc4_h[0])
uniform mediump vec4 pc4_m[4];
uniform highp vec4 pc4_h[2];


#define MobileDirectionalLight_DirectionalLightShadowMapChannelMask (pc5_u[0].x)
#define MobileDirectionalLight_DirectionalLightScreenToShadow(Offset) (mat4(pc5_h[0 + (int(Offset) * 4) + 0].xyzw,pc5_h[0 + (int(Offset) * 4) + 1].xyzw,pc5_h[0 + (int(Offset) * 4) + 2].xyzw,pc5_h[0 + (int(Offset) * 4) + 3].xyzw))
#define MobileDirectionalLight_DirectionalLightShadowDistances (pc5_m[4])
#define MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale (pc5_m[3])
#define MobileDirectionalLight_DirectionalLightShadowSize (pc5_m[2])
#define MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition (pc5_m[1])
#define MobileDirectionalLight_DirectionalLightColor (pc5_m[0])
uniform uvec4 pc5_u[1];
uniform highp vec4 pc5_h[16];
uniform mediump vec4 pc5_m[5];


#define Material_PreshaderBuffer_33 (pc6_h[26])
#define Material_PreshaderBuffer_32 (pc6_h[25])
#define Material_PreshaderBuffer_31 (pc6_h[24])
#define Material_PreshaderBuffer_30 (pc6_h[23])
#define Material_PreshaderBuffer_29 (pc6_h[22])
#define Material_PreshaderBuffer_28 (pc6_h[21])
#define Material_PreshaderBuffer_26 (pc6_h[20])
#define Material_PreshaderBuffer_25 (pc6_h[19])
#define Material_PreshaderBuffer_24 (pc6_h[18])
#define Material_PreshaderBuffer_22 (pc6_h[17])
#define Material_PreshaderBuffer_20 (pc6_h[16])
#define Material_PreshaderBuffer_19 (pc6_h[15])
#define Material_PreshaderBuffer_18 (pc6_h[14])
#define Material_PreshaderBuffer_16 (pc6_h[13])
#define Material_PreshaderBuffer_15 (pc6_h[12])
#define Material_PreshaderBuffer_14 (pc6_h[11])
#define Material_PreshaderBuffer_13 (pc6_h[10])
#define Material_PreshaderBuffer_12 (pc6_h[9])
#define Material_PreshaderBuffer_11 (pc6_h[8])
#define Material_PreshaderBuffer_10 (pc6_h[7])
#define Material_PreshaderBuffer_9 (pc6_h[6])
#define Material_PreshaderBuffer_8 (pc6_h[5])
#define Material_PreshaderBuffer_6 (pc6_h[4])
#define Material_PreshaderBuffer_5 (pc6_h[3])
#define Material_PreshaderBuffer_3 (pc6_h[2])
#define Material_PreshaderBuffer_1 (pc6_h[1])
#define Material_PreshaderBuffer_0 (pc6_h[0])
uniform highp vec4 pc6_h[27];


layout(binding = 0) uniform highp samplerBuffer ps0;
layout(binding = 1) uniform highp usamplerBuffer ps1;
layout(binding = 2) uniform highp usamplerBuffer ps2;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_2Material_Texture2D_2Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_3Material_Texture2D_3Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_5Material_Texture2D_5Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_6Material_Texture2D_6Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_7Material_Texture2D_7Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_9Material_Texture2D_9Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedLightmapResourceCluster_LightMapTextureLightmapResourceCluster_LightMapSampler;
uniform highp sampler2D SPIRV_Cross_CombinedLightmapResourceCluster_StaticShadowTextureLightmapResourceCluster_StaticShadowTextureSampler;
uniform highp sampler2D SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler;
uniform highp samplerCube SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler;

layout(location = 0) in vec4 in_var_TEXCOORD10;
layout(location = 1) in vec4 in_var_TEXCOORD11;
layout(location = 2) in highp vec4 in_var_TEXCOORD0[1];
layout(location = 3) in highp vec4 in_var_TEXCOORD4;
layout(location = 4) in highp vec4 in_var_TEXCOORD8;
layout(location = 0) out vec4 out_var_SV_Target0;
layout(location = 1) out highp float out_var_SV_Target1;

vec4 _563;

void main()
{
    highp float _572 = 1.0 / gl_FragCoord.w;
    mat3 _82 = mat3(in_var_TEXCOORD10.xyz, cross(in_var_TEXCOORD11.xyz, in_var_TEXCOORD10.xyz) * in_var_TEXCOORD11.w, in_var_TEXCOORD11.xyz);
    highp vec2 _588 = gl_FragCoord.xy - View_ViewRectMin.xy;
    highp vec4 _597 = vec4(((_588 * View_ViewSizeAndInvSize.zw) - vec2(0.5)) * vec2(2.0, -2.0), gl_FragCoord.z, 1.0) * _572;
    highp vec3 _606;
    if (View_ViewToClip[3].w >= 1.0)
    {
        _606 = -View_ViewForward;
    }
    else
    {
        _606 = normalize(-in_var_TEXCOORD8.xyz);
    }
    highp vec4 _610 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    float _85 = _610.w;
    float _86 = (Material_PreshaderBuffer_0.x * _85) * 6.28125;
    float _87 = cos(_86);
    float _88 = sin(_86);
    vec2 _90 = vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y) - vec2(0.5);
    vec2 _96 = vec2(dot(vec2(_87, (-1.0) * _88), _90), dot(vec2(_88, _87), _90)) + vec2(0.5);
    vec2 _254 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler, _96).xy * vec2(2.0)) - vec2(1.0);
    highp vec4 _632 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_2Material_Texture2D_2Sampler, (vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y) * vec2(Material_PreshaderBuffer_1.w)) + Material_PreshaderBuffer_3.xy);
    vec2 _112 = vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y) + (vec2(clamp(1.0 - clamp((1.0 - length(_90 * vec2(Material_PreshaderBuffer_1.x))) * 1.9609375, 0.0, 1.0), 0.0, 1.0)) * (_90 * vec2(mix(Material_PreshaderBuffer_1.y, Material_PreshaderBuffer_3.z, _632.x))));
    highp vec3 _646 = smoothstep(vec3(0.0), vec3(1.0), clamp(vec3(1.0) - ((vec3(length(_112 - vec2(0.5))) - (vec3(Material_PreshaderBuffer_0.w) - Material_PreshaderBuffer_5.xyz)) / Material_PreshaderBuffer_5.xyz), vec3(0.0), vec3(1.0)));
    float _113 = _646.x;
    vec3 _116 = mix(vec4(_254, sqrt(clamp(1.0 - dot(_254, _254), 0.0, 1.0)), 1.0).xyz, vec3(0.0, 0.0, 1.0), vec3(mix(Material_PreshaderBuffer_5.w, 1.0, _113)));
    float _118 = _116.z + 1.0;
    float _119 = (Material_PreshaderBuffer_6.x * _85) * 6.28125;
    float _120 = cos(_119);
    float _121 = sin(_119);
    vec2 _128 = vec2(dot(vec2(_120, (-1.0) * _121), _90), dot(vec2(_121, _120), _90)) + vec2(0.5);
    vec2 _267 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_3Material_Texture2D_3Sampler, _128).xy * vec2(2.0)) - vec2(1.0);
    vec3 _131 = mix(vec4(_267, sqrt(clamp(1.0 - dot(_267, _267), 0.0, 1.0)), 1.0).xyz, vec3(0.0, 0.0, 1.0), vec3(mix(Material_PreshaderBuffer_6.z, 1.0, _113)));
    vec3 _136 = vec3(_116.xy, _118);
    vec3 _140 = vec3(_131.xy * vec2(-1.0), _131.z);
    vec3 _147 = normalize(_82 * ((_136 * vec3(dot(_136, _140))) - (vec3(_118) * _140))) * 1.0;
    highp vec3 _667 = (-_606) + ((_147 * dot(_147, _606)) * 2.0);
    vec3 _152 = normalize(_82 * vec3(1.0, 0.0, 0.0));
    vec2 _276 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xy * vec2(2.0)) - vec2(1.0);
    vec3 _154 = _82 * vec4(_276, sqrt(clamp(1.0 - dot(_276, _276), 0.0, 1.0)), 1.0).xyz;
    vec3 _159 = normalize(_152 - (vec3(dot(_152, _154)) * _154));
    highp float _689 = 1.00029003620147705078125 / Material_PreshaderBuffer_11.x;
    float _281 = dot(_147, _606);
    highp float _690 = _689 * _281;
    highp float _709 = dot(_606, _154);
    vec3 _171 = (-normalize((_147 * (_690 - sqrt(1.0 + ((_690 - _689) * (_690 + _689))))) - (_606 * _689))) * ((max(_610.xyz - vec3(texture(SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler, Material_PreshaderBuffer_11.zw).x), vec3(0.0)) * vec3(Material_PreshaderBuffer_12.x)) / vec3(mix(0.324951171875, 1.0, _709 * _709)));
    vec2 _182 = (vec2(Material_PreshaderBuffer_12.w) * (mix(_112, (Material_PreshaderBuffer_12.yz * vec2(dot(_159, _171), dot(cross(_159, _154), _171))) + _112, vec2(_113)) - vec2(0.5))) + vec2(0.5);
    highp float _725 = pow(clamp((distance(vec2(0.5), _182) - 0.449999988079071044921875) * (-4.0), 0.0, 1.0), 0.699999988079071044921875);
    highp vec2 _732 = (_182 + vec2(Material_PreshaderBuffer_13.y * (_725 * (-0.100000001490116119384765625)), Material_PreshaderBuffer_13.z * (_725 * 0.100000001490116119384765625))) - vec2(0.5);
    vec2 _187 = (((mix(normalize(_732) * 0.5, vec2(0.0), vec2(clamp((1.0 - (length(_732) * 2.0)) * Material_PreshaderBuffer_13.x, 0.0, 1.0))) + vec2(0.5)) * vec2(Material_PreshaderBuffer_14.x)) + vec2(0.5)) - vec2(Material_PreshaderBuffer_14.y);
    highp vec4 _760 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_5Material_Texture2D_5Sampler, _96);
    float _284 = _760.x;
    float _285 = _760.y;
    float _282 = _760.z;
    vec3 _196 = (vec3((_284 <= 0.0) ? 0.0 : pow(_284, Material_PreshaderBuffer_18.w), (_285 <= 0.0) ? 0.0 : pow(_285, Material_PreshaderBuffer_18.w), (_282 <= 0.0) ? 0.0 : pow(_282, Material_PreshaderBuffer_18.w)) * vec3(Material_PreshaderBuffer_19.z)) * texture(SPIRV_Cross_CombinedMaterial_Texture2D_6Material_Texture2D_6Sampler, Material_PreshaderBuffer_20.yz).xyz;
    highp vec4 _785 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_7Material_Texture2D_7Sampler, _128);
    float _291 = _785.x;
    float _292 = _785.y;
    float _289 = _785.z;
    highp vec4 _809 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_9Material_Texture2D_9Sampler, _187);
    float _201 = _809.x;
    float _202 = _201 * 2.0;
    vec3 _206 = vec3(clamp(_202, 0.0, 1.0));
    vec3 _211 = vec3(clamp(_202 - 1.0, 0.0, 1.0));
    vec3 _212 = mix(mix(texture(SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler, Material_PreshaderBuffer_24.zw).xyz, texture(SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler, Material_PreshaderBuffer_25.xy).xyz, _206), texture(SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler, Material_PreshaderBuffer_26.xy).xyz, _211);
    vec3 _216 = vec3(mix(-1.0, 1.0, _201) * Material_PreshaderBuffer_26.z);
    vec3 _217 = mix(_212, vec3(dot(_212, vec3(0.300048828125, 0.58984375, 0.1099853515625))), _216);
    vec3 _222 = mix(mix(texture(SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler, Material_PreshaderBuffer_28.xy).xyz, texture(SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler, Material_PreshaderBuffer_28.zw).xyz, _206), texture(SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler, Material_PreshaderBuffer_29.zw).xyz, _211);
    vec3 _225 = mix(_222, vec3(dot(_222, vec3(0.300048828125, 0.58984375, 0.1099853515625))), _216);
    vec3 _235 = mix(mix(_217, _225, vec3(smoothstep(Material_PreshaderBuffer_30.w, Material_PreshaderBuffer_30.z, 1.0 - _809.z))), mix(_217, _225, vec3(smoothstep(Material_PreshaderBuffer_30.w, Material_PreshaderBuffer_30.z, 1.0 - _201))), vec3(Material_PreshaderBuffer_31.x)) * vec3(_809.w);
    highp vec3 _844 = mix(_235, _235 * vec3(_809.y), vec3(Material_PreshaderBuffer_31.y));
    float _298 = _844.x;
    float _299 = _844.y;
    float _296 = _844.z;
    vec3 _245 = mix(_844, vec3((_298 <= 0.0) ? 0.0 : pow(_298, Material_PreshaderBuffer_31.w), (_299 <= 0.0) ? 0.0 : pow(_299, Material_PreshaderBuffer_31.w), (_296 <= 0.0) ? 0.0 : pow(_296, Material_PreshaderBuffer_31.w)), vec3(smoothstep(0.27490234375, 0.5, length(_187 + vec2(-0.5))))) * vec3(Material_PreshaderBuffer_32.x);
    vec3 _303 = clamp(mix(Material_PreshaderBuffer_10.xyz, vec3(1.0), vec3(clamp((1.0 - (length(_90) * Material_PreshaderBuffer_8.z)) * Material_PreshaderBuffer_9.z, 0.0, 1.0))) * ((vec3(clamp((1.0 - (length(_187 - vec2(0.5)) * Material_PreshaderBuffer_15.x)) * Material_PreshaderBuffer_16.x, 0.0, 1.0)) * Material_PreshaderBuffer_18.xyz) + mix(mix(_196, _196 * Material_PreshaderBuffer_22.xyz, vec3(_646.y)) * vec3((_291 <= 0.0) ? 0.0 : pow(_291, Material_PreshaderBuffer_22.w), (_292 <= 0.0) ? 0.0 : pow(_292, Material_PreshaderBuffer_22.w), (_289 <= 0.0) ? 0.0 : pow(_289, Material_PreshaderBuffer_22.w)), mix(_245, vec3(dot(_245, vec3(0.300048828125, 0.58984375, 0.1099853515625))), vec3(Material_PreshaderBuffer_32.w)), vec3(_113))), vec3(0.0), vec3(1.0));
    float _304 = clamp(mix(Material_PreshaderBuffer_33.y, Material_PreshaderBuffer_33.x, _113), 0.0, 1.0);
    highp float _869 = max(0.015625, clamp(mix(Material_PreshaderBuffer_33.w, Material_PreshaderBuffer_33.z, _113), 0.0, 1.0));
    highp vec2 _872 = in_var_TEXCOORD4.xy * vec2(1.0, 0.5);
    highp vec4 _877 = texture(SPIRV_Cross_CombinedLightmapResourceCluster_LightMapTextureLightmapResourceCluster_LightMapSampler, _872);
    highp vec4 _879 = texture(SPIRV_Cross_CombinedLightmapResourceCluster_LightMapTextureLightmapResourceCluster_LightMapSampler, _872 + vec2(0.0, 0.5));
    vec3 _313 = (_877.xyz * PrecomputedLightingBuffer_LightMapScale(0).xyz) + PrecomputedLightingBuffer_LightMapAdd(0).xyz;
    float _326 = dot(_313, vec3(0.300048828125, 0.58984375, 0.1099853515625));
    float _325 = (exp2((_326 * 16.0) - 8.0) - 0.00390625) * max(0.0, dot((_879 * PrecomputedLightingBuffer_LightMapScale(1)) + PrecomputedLightingBuffer_LightMapAdd(1), vec4(_147.yzx, 1.0)));
    highp vec4 _894 = texture(SPIRV_Cross_CombinedLightmapResourceCluster_StaticShadowTextureLightmapResourceCluster_StaticShadowTextureSampler, in_var_TEXCOORD4.zw);
    highp vec4 _901 = clamp((_894 * PrecomputedLightingBuffer_InvUniformPenumbraSizes) + ((PrecomputedLightingBuffer_InvUniformPenumbraSizes * (-0.5)) + vec4(0.5)), vec4(0.0), vec4(1.0));
    highp vec4 _905 = (PrecomputedLightingBuffer_StaticShadowMapMasks * _901) * _901;
    highp float _906 = _597.w;
    highp vec4 _930;
    int _913 = 0;
    for (;;)
    {
        if (_913 < 4)
        {
            if (_906 < MobileDirectionalLight_DirectionalLightShadowDistances[uint(_913)])
            {
                _930 = MobileDirectionalLight_DirectionalLightScreenToShadow(_913) * vec4(_597.xy, _906, 1.0);
                break;
            }
            _913++;
            continue;
        }
        else
        {
            _930 = vec4(0.0);
            break;
        }
    }
    float _403;
    if (_930.z > 0.0)
    {
        highp vec2 _940 = (_930.xy * MobileDirectionalLight_DirectionalLightShadowSize.xy) - vec2(0.5);
        highp vec2 _941 = fract(_940);
        highp vec2 _945 = (floor(_940) + vec2(1.0)) * MobileDirectionalLight_DirectionalLightShadowSize.zw;
        highp vec4 _951 = vec4((min(1.0 - _930.z, 0.999989986419677734375) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - 1.0);
        highp vec4 _953 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _945, ivec2(-1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _951, vec4(0.0), vec4(1.0));
        highp vec4 _958 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _945, ivec2(1, -1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _951, vec4(0.0), vec4(1.0));
        highp vec4 _963 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _945, ivec2(-1, 1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _951, vec4(0.0), vec4(1.0));
        highp vec4 _968 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _945, ivec2(1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _951, vec4(0.0), vec4(1.0));
        highp float _970 = _941.x;
        highp float _971 = 1.0 - _970;
        highp vec4 _998 = _563;
        _998.x = (((_953.w * _971) + _953.z) + _958.w) + (_958.z * _970);
        highp vec4 _1002 = _998;
        _1002.y = (((_953.x * _971) + _953.y) + _958.x) + (_958.y * _970);
        highp vec4 _1006 = _1002;
        _1006.z = (((_963.w * _971) + _963.z) + _968.w) + (_968.z * _970);
        highp vec4 _1010 = _1006;
        _1010.w = (((_963.x * _971) + _963.y) + _968.x) + (_968.y * _970);
        highp float _1011 = _941.y;
        highp float _1020 = clamp((_906 * MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.x) + MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.y, 0.0, 1.0);
        _403 = mix(dot(_1010, vec4(1.0 - _1011, 1.0, 1.0, _1011) * 0.111111111938953399658203125), 1.0, _1020 * _1020);
    }
    else
    {
        _403 = 1.0;
    }
    highp vec4 _1039 = vec4(float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 1u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 2u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 4u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 8u) != 0u));
    highp float _1043 = max(0.0, dot(_147, normalize(_606 + MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz)));
    vec3 _346 = _303 * 0.318407952785491943359375;
    highp vec3 _1044 = vec3(1.0) * max(0.0, dot(_147, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz));
    float _347 = _869 * _869;
    highp float _1048 = _1043 * _347;
    highp float _1050 = _347 / ((1.0 - (_1043 * _1043)) + (_1048 * _1048));
    float _352 = (_869 * 0.25) + 0.25;
    vec4 _361 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _869) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
    float _362 = _361.x;
    vec2 _372 = (vec2(-1.0400390625, 1.0400390625) * ((min(_362 * _362, exp2((-9.28125) * clamp(abs(_281) + 1.0013580322265625e-05, 0.0, 1.0))) * _362) + _361.y)) + _361.zw;
    highp vec3 _1053 = (vec3(0.07999999821186065673828125 * _304) * _372.x) + vec3(clamp(_304 * 4.0, 0.0, 1.0) * _372.y);
    uvec2 _1087 = uvec2(uint(_588.x), uint(_588.y)) >> (uvec2(MobileBasePass_Forward_LightGridPixelSizeShift) & uvec2(31u));
    vec3 _404;
    if (float(MobileReflectionCapture_Params.y > 0.0) != 0.0)
    {
        _404 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _667, (MobileReflectionCapture_Params.y - 1.0) - (1.0 - (1.2001953125 * log2(max(_869, 0.00100040435791015625))))).xyz * View_SkyLightColor.xyz;
    }
    else
    {
        _404 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _667, (View_ReflectionCubemapMaxMip - 1.0) - (1.0 - (1.2001953125 * log2(max(_869, 0.00100040435791015625))))).xyz * MobileReflectionCapture_Params.w;
    }
    uint _1134 = ((((min(uint(max(0.0, log2((_572 * MobileBasePass_Forward_LightGridZParams.x) + MobileBasePass_Forward_LightGridZParams.y) * MobileBasePass_Forward_LightGridZParams.z)), uint(MobileBasePass_Forward_CulledGridSize.z - 1)) * uint(MobileBasePass_Forward_CulledGridSize.y)) + _1087.y) * uint(MobileBasePass_Forward_CulledGridSize.x)) + _1087.x) * 2u;
    uvec4 _1142 = texelFetch(ps1, int(_1134 + 1u));
    uint _1143 = _1142.x;
    uint _1158 = (uint((Primitive_Flags & 1024u) != 0u) | (uint((Primitive_Flags & 2048u) != 0u) << 1u)) | (uint((Primitive_Flags & 4096u) != 0u) << 2u);
    uint _1159 = min(min(texelFetch(ps1, int(_1134)).x, MobileBasePass_Forward_NumLocalLights), MobileBasePass_Forward_NumLocalLights);
    highp vec3 _1161;
    _1161 = (((_313 * (_325 / max(9.9999997473787516355514526367188e-06, _326))) * _303) + ((((_346 * _1044) * 1.0) + ((_1044 * (_1053 * (min(_1050 * _1050, 2048.0) * _352))) * MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.z)) * (MobileDirectionalLight_DirectionalLightColor.xyz * (_403 * mix(1.0, dot(_905, _1039), dot(_1039, vec4(1.0))))))) + (((_404 * mix(1.0, min(_325 / max(MobileReflectionCapture_Params.x, 9.9999997473787516355514526367188e-05), View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.z), smoothstep(0.0, 1.0, clamp((_869 * View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.x) + View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.y, 0.0, 1.0)))) * 1.0) * _1053);
    highp vec3 _1162;
    SPIRV_CROSS_LOOP
    for (uint _1164 = 0u; _1164 < _1159; _1161 = _1162, _1164++)
    {
        uint _1173 = texelFetch(ps2, int(_1143 + _1164)).x * 6u;
        highp vec4 _1175 = texelFetch(ps0, int(_1173));
        highp vec4 _1177 = texelFetch(ps0, int(_1173 + 1u));
        highp vec4 _1179 = texelFetch(ps0, int(_1173 + 2u));
        highp vec4 _1181 = texelFetch(ps0, int(_1173 + 3u));
        highp float _1182 = _1175.w;
        highp float _1183 = _1182 * _1182;
        highp vec3 _1184 = _1175.xyz;
        highp vec3 _1185 = in_var_TEXCOORD8.xyz - _1184;
        if ((dot(_1185, _1185) * _1183) > 1.0)
        {
            _1162 = _1161;
            continue;
        }
        uint _1192 = floatBitsToUint(_1179.w);
        if (((_1192 >> 8u) & _1158) == 0u)
        {
            _1162 = _1161;
            continue;
        }
        highp float _1201 = _1177.w;
        highp vec4 _1216 = vec4(float((_1192 & 1u) != 0u), float((_1192 & 2u) != 0u), float((_1192 & 4u) != 0u), float((_1192 & 8u) != 0u));
        highp vec3 _1217 = _1184 - in_var_TEXCOORD8.xyz;
        highp float _1218 = dot(_1217, _1217);
        highp vec3 _1220 = _1217 * inversesqrt(_1218);
        highp float _1237;
        if (_1201 == 0.0)
        {
            highp float _1229 = _1218 * _1183;
            highp float _1232 = clamp(1.0 - (_1229 * _1229), 0.0, 1.0);
            _1237 = (_1232 * _1232) * (1.0 / (_1218 + 1.0));
        }
        else
        {
            highp vec3 _1224 = _1217 * _1182;
            _1237 = pow(1.0 - clamp(dot(_1224, _1224), 0.0, 1.0), _1201);
        }
        highp float _1248;
        if (((_1192 >> 16u) & 3u) == 2u)
        {
            highp float _1245 = clamp((dot(_1220, _1179.xyz) - _1181.x) * _1181.y, 0.0, 1.0);
            _1248 = _1237 * (_1245 * _1245);
        }
        else
        {
            _1248 = _1237;
        }
        highp vec3 _1270;
        SPIRV_CROSS_BRANCH
        if (_1248 > 0.0)
        {
            highp float _1256 = max(0.0, dot(_147, normalize(_606 + _1220)));
            highp vec3 _1257 = vec3(1.0) * max(0.0, dot(_147, _1220));
            highp float _1261 = _1256 * _347;
            highp float _1263 = _347 / ((1.0 - (_1256 * _1256)) + (_1261 * _1261));
            _1270 = (((_346 * _1257) * 1.0) + ((_1257 * (_1053 * (min(_1263 * _1263, 2048.0) * _352))) * 1.0)) * ((_1177.xyz * _1248) * mix(1.0, dot(_905, _1216), dot(_1216, vec4(1.0))));
        }
        else
        {
            _1270 = vec3(0.0);
        }
        _1162 = _1161 + _1270;
    }
    vec3 _70 = _1161 * 1.0;
    vec4 _405 = vec4(_70.x, _70.y, _70.z, _563.w);
    _405.w = 0.0;
    highp vec3 _1273 = min((_405.xyz * View_PreExposure).xyz, vec3(32512.0, 32512.0, 32256.0));
    out_var_SV_Target0 = vec4(_1273.x, _1273.y, _1273.z, _405.w);
    out_var_SV_Target1 = gl_FragCoord.z;
}

