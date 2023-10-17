// ! M_fabric_simpler/Default/FLocalVertexFactory/TMobileBasePassPSFMobileMovableDirectionalLightCSMWithLightmapPolicyHDRLinear64EnableLocalLights/0/MobileBasePassPixelShader.usf:Main
// Compiled by ShaderConductor
// @Inputs: f4;10:in_var_TEXCOORD10,f4;11:in_var_TEXCOORD11,f4;0:in_var_TEXCOORD0,f4;4:in_var_TEXCOORD4,f4;8:in_var_TEXCOORD8
// @Outputs: f4;0:out_Target0,f1;1:out_Target1
// @PackedUB: View(0): View_ViewToClip(128,16),View_ViewForward(264,3),View_ViewRectMin(512,4),View_ViewSizeAndInvSize(516,4),View_PreExposure(546,1),View_CullingSign(571,1),View_SkyLightColor(748,4),View_ReflectionCubemapMaxMip(786,1),View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight(792,3)
// @PackedUB: MobileReflectionCapture(1): MobileReflectionCapture_Params(0,4)
// @PackedUB: Primitive(2): Primitive_Flags(0,1)
// @PackedUB: MobileBasePass(3): MobileBasePass_Forward_NumLocalLights(52,1),MobileBasePass_Forward_CulledGridSize(56,3),MobileBasePass_Forward_LightGridPixelSizeShift(60,1),MobileBasePass_Forward_LightGridZParams(64,3)
// @PackedUB: PrecomputedLightingBuffer(4): PrecomputedLightingBuffer_LightMapScale(16,8),PrecomputedLightingBuffer_LightMapAdd(24,8)
// @PackedUB: MobileDirectionalLight(5): MobileDirectionalLight_DirectionalLightColor(0,4),MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition(4,4),MobileDirectionalLight_DirectionalLightShadowSize(8,4),MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale(12,4),MobileDirectionalLight_DirectionalLightShadowDistances(16,4),MobileDirectionalLight_DirectionalLightScreenToShadow(20,64),MobileDirectionalLight_DirectionalLightShadowMapChannelMask(84,1)
// @PackedUB: Material(6): Material_PreshaderBuffer_0(0,4),Material_PreshaderBuffer_1(4,4),Material_PreshaderBuffer_4(16,4),Material_PreshaderBuffer_5(20,4),Material_PreshaderBuffer_6(24,4),Material_PreshaderBuffer_8(32,4),Material_PreshaderBuffer_10(40,4),Material_PreshaderBuffer_11(44,4),Material_PreshaderBuffer_13(52,4),Material_PreshaderBuffer_14(56,4),Material_PreshaderBuffer_15(60,4),Material_PreshaderBuffer_16(64,4),Material_PreshaderBuffer_17(68,4),Material_PreshaderBuffer_18(72,4)
// @PackedUBCopies: 0:128-0:h:0:16,0:264-0:m:0:3,0:512-0:m:4:4,0:516-0:h:16:4,0:546-0:h:20:1,0:571-0:h:24:1,0:748-0:h:28:4,0:786-0:m:8:1,0:792-0:h:32:3,1:0-1:h:0:4,2:0-2:u:0:1,3:52-3:u:0:1,3:56-3:i:0:3,3:60-3:u:4:1,3:64-3:h:0:3,4:16-4:m:0:8,4:24-4:m:8:8,5:0-5:m:0:4,5:4-5:m:4:4,5:8-5:m:8:4,5:12-5:m:12:4,5:16-5:m:16:4,5:20-5:h:0:64,5:84-5:u:0:1,6:0-6:h:0:4,6:4-6:h:4:4,6:16-6:h:8:4,6:20-6:h:12:4,6:24-6:h:16:4,6:32-6:h:20:4,6:40-6:h:24:4,6:44-6:h:28:4,6:52-6:h:32:4,6:56-6:h:36:4,6:60-6:h:40:4,6:64-6:h:44:4,6:68-6:h:48:4,6:72-6:h:52:4
// @Samplers: MobileBasePass_Forward_ForwardLocalLightBuffer(0:1),MobileBasePass_Forward_NumCulledLightsGrid(1:1),MobileBasePass_Forward_CulledLightDataGrid(2:1),MobileReflectionCapture_Texture(3:1[MobileReflectionCapture_TextureSampler]),LightmapResourceCluster_LightMapTexture(4:1[LightmapResourceCluster_LightMapSampler]),MobileDirectionalLight_DirectionalLightShadowTexture(5:1[MobileDirectionalLight_DirectionalLightShadowSampler]),Material_Texture2D_0(6:1[Material_Texture2D_0Sampler]),Material_Texture2D_1(7:1[Material_Texture2D_1Sampler]),Material_Texture2D_2(8:1[Material_Texture2D_2Sampler]),Material_Texture2D_3(9:1[Material_Texture2D_3Sampler]),Material_Texture2D_4(10:1[Material_Texture2D_4Sampler]),Material_Texture2D_5(11:1[Material_Texture2D_5Sampler]),Material_Texture2D_6(12:1[Material_Texture2D_6Sampler]),Material_Texture2D_7(13:1[Material_Texture2D_7Sampler]),Material_Texture2D_8(14:1[Material_Texture2D_8Sampler]),Material_Texture2D_9(15:1[Material_Texture2D_9Sampler]),Material_Texture2D_10(16:1[Material_Texture2D_10Sampler])
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

#define View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight (pc0_h[8].xyz)
#define View_ReflectionCubemapMaxMip (pc0_m[2].x)
#define View_SkyLightColor (pc0_h[7])
#define View_CullingSign (pc0_h[6].x)
#define View_PreExposure (pc0_h[5].x)
#define View_ViewSizeAndInvSize (pc0_h[4])
#define View_ViewRectMin (pc0_m[1])
#define View_ViewForward (pc0_m[0].xyz)
#define View_ViewToClip (mat4(pc0_h[0 + 0].xyzw,pc0_h[0 + 1].xyzw,pc0_h[0 + 2].xyzw,pc0_h[0 + 3].xyzw))
#define SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler ps3
#define SPIRV_Cross_CombinedLightmapResourceCluster_LightMapTextureLightmapResourceCluster_LightMapSampler ps4
#define SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler ps5
#define SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler ps6
#define SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler ps7
#define SPIRV_Cross_CombinedMaterial_Texture2D_2Material_Texture2D_2Sampler ps8
#define SPIRV_Cross_CombinedMaterial_Texture2D_3Material_Texture2D_3Sampler ps9
#define SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler ps10
#define SPIRV_Cross_CombinedMaterial_Texture2D_5Material_Texture2D_5Sampler ps11
#define SPIRV_Cross_CombinedMaterial_Texture2D_6Material_Texture2D_6Sampler ps12
#define SPIRV_Cross_CombinedMaterial_Texture2D_7Material_Texture2D_7Sampler ps13
#define SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler ps14
#define SPIRV_Cross_CombinedMaterial_Texture2D_9Material_Texture2D_9Sampler ps15
#define SPIRV_Cross_CombinedMaterial_Texture2D_10Material_Texture2D_10Sampler ps16
uniform mediump vec4 pc0_m[3];
uniform highp vec4 pc0_h[9];


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
uniform mediump vec4 pc4_m[4];


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


#define Material_PreshaderBuffer_18 (pc6_h[13])
#define Material_PreshaderBuffer_17 (pc6_h[12])
#define Material_PreshaderBuffer_16 (pc6_h[11])
#define Material_PreshaderBuffer_15 (pc6_h[10])
#define Material_PreshaderBuffer_14 (pc6_h[9])
#define Material_PreshaderBuffer_13 (pc6_h[8])
#define Material_PreshaderBuffer_11 (pc6_h[7])
#define Material_PreshaderBuffer_10 (pc6_h[6])
#define Material_PreshaderBuffer_8 (pc6_h[5])
#define Material_PreshaderBuffer_6 (pc6_h[4])
#define Material_PreshaderBuffer_5 (pc6_h[3])
#define Material_PreshaderBuffer_4 (pc6_h[2])
#define Material_PreshaderBuffer_1 (pc6_h[1])
#define Material_PreshaderBuffer_0 (pc6_h[0])
uniform highp vec4 pc6_h[14];


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
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_10Material_Texture2D_10Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedLightmapResourceCluster_LightMapTextureLightmapResourceCluster_LightMapSampler;
uniform highp sampler2D SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler;
uniform highp samplerCube SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler;

layout(location = 0) in vec4 in_var_TEXCOORD10;
layout(location = 1) in vec4 in_var_TEXCOORD11;
layout(location = 2) in highp vec4 in_var_TEXCOORD0[1];
layout(location = 3) in highp vec4 in_var_TEXCOORD4;
layout(location = 4) in highp vec4 in_var_TEXCOORD8;
layout(location = 0) out vec4 out_var_SV_Target0;
layout(location = 1) out highp float out_var_SV_Target1;

vec4 _537;

void main()
{
    highp float _545 = 1.0 / gl_FragCoord.w;
    highp vec2 _565 = gl_FragCoord.xy - View_ViewRectMin.xy;
    highp vec4 _574 = vec4(((_565 * View_ViewSizeAndInvSize.zw) - vec2(0.5)) * vec2(2.0, -2.0), gl_FragCoord.z, 1.0) * _545;
    highp vec3 _583;
    if (View_ViewToClip[3].w >= 1.0)
    {
        _583 = -View_ViewForward;
    }
    else
    {
        _583 = normalize(-in_var_TEXCOORD8.xyz);
    }
    vec2 _252 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xy * vec2(2.0)) - vec2(1.0);
    highp vec3 _602 = mix(vec3(0.0, 0.0, 1.0), vec4(_252, sqrt(clamp(1.0 - dot(_252, _252), 0.0, 1.0)), 1.0).xyz, vec3(Material_PreshaderBuffer_0.x));
    float _91 = _602.z + 1.0;
    highp vec4 _610 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    float _92 = _610.x;
    vec3 _93 = vec3(_92);
    vec3 _94 = mix(vec3(0.0, 0.0, 1.0), mix(vec3(0.0, 0.0, 1.0), _602, vec3(Material_PreshaderBuffer_0.y)), _93);
    vec3 _99 = vec3(_602.xy, _91);
    vec3 _103 = vec3(_94.xy * vec2(-1.0), _94.z);
    vec3 _109 = (_99 * vec3(dot(_99, _103))) - (vec3(_91) * _103);
    float _111 = _109.z + 1.0;
    vec2 _116 = vec2(in_var_TEXCOORD0[0].x * Material_PreshaderBuffer_0.z, in_var_TEXCOORD0[0].y * Material_PreshaderBuffer_0.w) * vec2(Material_PreshaderBuffer_1.x);
    vec2 _259 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_2Material_Texture2D_2Sampler, _116).xy * vec2(2.0)) - vec2(1.0);
    vec3 _118 = mix(mix(vec3(0.0, 0.0, 1.0), vec4(_259, sqrt(clamp(1.0 - dot(_259, _259), 0.0, 1.0)), 1.0).xyz, vec3(Material_PreshaderBuffer_1.y)), vec3(0.0, 0.0, 1.0), _93);
    float _120 = _118.z + 1.0;
    vec2 _266 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_3Material_Texture2D_3Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y) * vec2(Material_PreshaderBuffer_1.z)).xy * vec2(2.0)) - vec2(1.0);
    vec3 _124 = mix(mix(vec3(0.0, 0.0, 1.0), vec4(_266, sqrt(clamp(1.0 - dot(_266, _266), 0.0, 1.0)), 1.0).xyz, vec3(Material_PreshaderBuffer_1.w)), vec3(0.0, 0.0, 1.0), _93);
    vec3 _129 = vec3(_118.xy, _120);
    vec3 _133 = vec3(_124.xy * vec2(-1.0), _124.z);
    vec3 _139 = (_129 * vec3(dot(_129, _133))) - (vec3(_120) * _133);
    vec3 _144 = vec3(_109.xy, _111);
    vec3 _148 = vec3(_139.xy * vec2(-1.0), _139.z);
    vec3 _155 = normalize(mat3(in_var_TEXCOORD10.xyz, cross(in_var_TEXCOORD11.xyz, in_var_TEXCOORD10.xyz) * in_var_TEXCOORD11.w, in_var_TEXCOORD11.xyz) * ((_144 * vec3(dot(_144, _148))) - (vec3(_111) * _148))) * ((View_CullingSign * (((Primitive_Flags & 64u) != 0u) ? (-1.0) : 1.0)) * float(gl_FrontFacing ? (-1) : 1));
    highp float _644 = dot(_155, _583);
    highp vec3 _647 = (-_583) + ((_155 * _644) * 2.0);
    highp vec4 _663 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_5Material_Texture2D_5Sampler, (in_var_TEXCOORD0[0].zw * vec2(Material_PreshaderBuffer_4.x)) + Material_PreshaderBuffer_5.xy);
    float _163 = _663.x;
    float _165 = _663.y;
    float _168 = _663.z;
    highp vec3 _687 = vec3(_92);
    highp vec3 _688 = mix(mix(Material_PreshaderBuffer_11.xyz, ((Material_PreshaderBuffer_6.xyz * vec3(_163)) + (Material_PreshaderBuffer_8.xyz * vec3(_165))) + (Material_PreshaderBuffer_10.xyz * vec3(_168)), vec3(((_163 + _165) + _168) * Material_PreshaderBuffer_10.w)), Material_PreshaderBuffer_13.xyz, _687);
    vec3 _173 = ((texture(SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler, _116).xyz + vec3(0.00010001659393310546875)) / (texture(SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler, _116, 14.0).xyz + vec3(0.00010001659393310546875))) * _688;
    highp vec3 _692 = mix(_173, _688, vec3(Material_PreshaderBuffer_13.w));
    highp vec3 _696 = mix(_692, _173 * _692, vec3(Material_PreshaderBuffer_14.x));
    highp vec4 _700 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_6Material_Texture2D_6Sampler, _116);
    float _175 = _700.x;
    highp float _703 = mix(0.5, _175, Material_PreshaderBuffer_14.y);
    highp float _712 = mix(0.5, texture(SPIRV_Cross_CombinedMaterial_Texture2D_7Material_Texture2D_7Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y) * vec2(Material_PreshaderBuffer_14.z)).x, Material_PreshaderBuffer_14.w);
    float _187 = (_703 >= 0.5) ? (1.0 - (((1.0 - _703) * 2.0) * (1.0 - _712))) : ((_703 * 2.0) * _712);
    vec3 _188 = vec3(_187);
    highp float _719 = mix(0.5, texture(SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).x, Material_PreshaderBuffer_15.x);
    vec3 _195 = vec3(1.0) - (((vec3(1.0) - _188) * vec3(2.0)) * vec3(1.0 - _719));
    vec3 _198 = (_188 * vec3(2.0)) * vec3(_719);
    bool _199 = _187 >= 0.5;
    float _202 = _199 ? _195.x : _198.x;
    float _209 = _202 * 2.0;
    highp float _725 = mix(mix(Material_PreshaderBuffer_15.y, 1.0, clamp(_209, 0.0, 1.0)), Material_PreshaderBuffer_15.z, clamp(_209 - 1.0, 0.0, 1.0));
    float _275 = _696.x;
    highp float _727 = (_275 <= 0.0) ? 0.0 : pow(_275, _725);
    float _276 = _696.y;
    highp float _729 = (_276 <= 0.0) ? 0.0 : pow(_276, _725);
    float _273 = _696.z;
    highp float _731 = (_273 <= 0.0) ? 0.0 : pow(_273, _725);
    vec3 _274 = vec3(_727, _729, _731);
    highp vec3 _735 = mix(vec3(0.5), vec3(_202, _199 ? _195.y : _198.y, _199 ? _195.z : _198.z), vec3(Material_PreshaderBuffer_15.w));
    vec3 _218 = vec3(1.0) - (((vec3(1.0) - _274) * vec3(2.0)) * (vec3(1.0) - _735));
    vec3 _220 = (_274 * vec3(2.0)) * _735;
    highp vec3 _736 = mix(vec3((_727 >= 0.5) ? _218.x : _220.x, (_729 >= 0.5) ? _218.y : _220.y, (_731 >= 0.5) ? _218.z : _220.z), Material_PreshaderBuffer_13.xyz, _687);
    vec3 _238 = mix(max(_736, mix(vec3(0.0), texture(SPIRV_Cross_CombinedMaterial_Texture2D_9Material_Texture2D_9Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y) * vec2(Material_PreshaderBuffer_16.x)).xxx * _688, vec3(Material_PreshaderBuffer_16.y))), _736, _93);
    float _283 = _238.x;
    float _284 = _238.y;
    float _281 = _238.z;
    float _242 = max(abs(1.0 - max(0.0, _644)), 0.00010001659393310546875);
    highp vec4 _772 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_10Material_Texture2D_10Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    vec3 _289 = clamp(mix(_238, vec3((_283 <= 0.0) ? 0.0 : pow(_283, Material_PreshaderBuffer_16.z), (_284 <= 0.0) ? 0.0 : pow(_284, Material_PreshaderBuffer_16.z), (_281 <= 0.0) ? 0.0 : pow(_281, Material_PreshaderBuffer_16.z)), vec3(mix(Material_PreshaderBuffer_17.x, Material_PreshaderBuffer_16.w, _92) * ((((_242 <= 0.0) ? 0.0 : pow(_242, Material_PreshaderBuffer_17.y)) * 0.9599609375) + 0.040008544921875))), vec3(0.0), vec3(1.0));
    float _290 = clamp(Material_PreshaderBuffer_17.z, 0.0, 1.0);
    highp float _778 = max(0.015625, clamp(Material_PreshaderBuffer_18.y * _772.y, 0.0, 1.0));
    float _293 = clamp(_772.x, 0.0, 1.0);
    vec3 _296 = mix(vec3(0.07999999821186065673828125 * clamp(mix(Material_PreshaderBuffer_18.x, Material_PreshaderBuffer_17.w, _175), 0.0, 1.0)), _289, vec3(_290));
    vec3 _70 = _289 - (_289 * _290);
    highp vec2 _781 = in_var_TEXCOORD4.xy * vec2(1.0, 0.5);
    highp vec4 _786 = texture(SPIRV_Cross_CombinedLightmapResourceCluster_LightMapTextureLightmapResourceCluster_LightMapSampler, _781);
    highp vec4 _788 = texture(SPIRV_Cross_CombinedLightmapResourceCluster_LightMapTextureLightmapResourceCluster_LightMapSampler, _781 + vec2(0.0, 0.5));
    vec3 _303 = (_786.xyz * PrecomputedLightingBuffer_LightMapScale(0).xyz) + PrecomputedLightingBuffer_LightMapAdd(0).xyz;
    float _316 = dot(_303, vec3(0.300048828125, 0.58984375, 0.1099853515625));
    float _315 = (exp2((_316 * 16.0) - 8.0) - 0.00390625) * max(0.0, dot((_788 * PrecomputedLightingBuffer_LightMapScale(1)) + PrecomputedLightingBuffer_LightMapAdd(1), vec4(_155.yzx, 1.0)));
    highp float _800 = _574.w;
    highp vec4 _824;
    int _807 = 0;
    for (;;)
    {
        if (_807 < 4)
        {
            if (_800 < MobileDirectionalLight_DirectionalLightShadowDistances[uint(_807)])
            {
                _824 = MobileDirectionalLight_DirectionalLightScreenToShadow(_807) * vec4(_574.xy, _800, 1.0);
                break;
            }
            _807++;
            continue;
        }
        else
        {
            _824 = vec4(0.0);
            break;
        }
    }
    float _396;
    if (_824.z > 0.0)
    {
        highp vec2 _834 = (_824.xy * MobileDirectionalLight_DirectionalLightShadowSize.xy) - vec2(0.5);
        highp vec2 _835 = fract(_834);
        highp vec2 _839 = (floor(_834) + vec2(1.0)) * MobileDirectionalLight_DirectionalLightShadowSize.zw;
        highp vec4 _845 = vec4((min(1.0 - _824.z, 0.999989986419677734375) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - 1.0);
        highp vec4 _847 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _839, ivec2(-1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _845, vec4(0.0), vec4(1.0));
        highp vec4 _852 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _839, ivec2(1, -1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _845, vec4(0.0), vec4(1.0));
        highp vec4 _857 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _839, ivec2(-1, 1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _845, vec4(0.0), vec4(1.0));
        highp vec4 _862 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _839, ivec2(1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _845, vec4(0.0), vec4(1.0));
        highp float _864 = _835.x;
        highp float _865 = 1.0 - _864;
        highp vec4 _892 = _537;
        _892.x = (((_847.w * _865) + _847.z) + _852.w) + (_852.z * _864);
        highp vec4 _896 = _892;
        _896.y = (((_847.x * _865) + _847.y) + _852.x) + (_852.y * _864);
        highp vec4 _900 = _896;
        _900.z = (((_857.w * _865) + _857.z) + _862.w) + (_862.z * _864);
        highp vec4 _904 = _900;
        _904.w = (((_857.x * _865) + _857.y) + _862.x) + (_862.y * _864);
        highp float _905 = _835.y;
        highp float _914 = clamp((_800 * MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.x) + MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.y, 0.0, 1.0);
        _396 = mix(dot(_904, vec4(1.0 - _905, 1.0, 1.0, _905) * 0.111111111938953399658203125), 1.0, _914 * _914);
    }
    else
    {
        _396 = 1.0;
    }
    highp vec4 _933 = vec4(float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 1u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 2u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 4u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 8u) != 0u));
    highp float _937 = max(0.0, dot(_155, normalize(_583 + MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz)));
    vec3 _338 = _70 * 0.318407952785491943359375;
    highp vec3 _938 = vec3(1.0) * max(0.0, dot(_155, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz));
    float _339 = _778 * _778;
    highp float _942 = _937 * _339;
    highp float _944 = _339 / ((1.0 - (_937 * _937)) + (_942 * _942));
    float _344 = (_778 * 0.25) + 0.25;
    vec4 _354 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _778) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
    float _355 = _354.x;
    vec2 _365 = (vec2(-1.0400390625, 1.0400390625) * ((min(_355 * _355, exp2((-9.28125) * clamp(abs(dot(_155, _583)) + 1.0013580322265625e-05, 0.0, 1.0))) * _355) + _354.y)) + _354.zw;
    highp vec3 _947 = (_296 * _365.x) + vec3(clamp(50.0 * _296.y, 0.0, 1.0) * _365.y);
    uvec2 _981 = uvec2(uint(_565.x), uint(_565.y)) >> (uvec2(MobileBasePass_Forward_LightGridPixelSizeShift) & uvec2(31u));
    vec3 _397;
    if (float(MobileReflectionCapture_Params.y > 0.0) != 0.0)
    {
        _397 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _647, (MobileReflectionCapture_Params.y - 1.0) - (1.0 - (1.2001953125 * log2(max(_778, 0.00100040435791015625))))).xyz * View_SkyLightColor.xyz;
    }
    else
    {
        _397 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _647, (View_ReflectionCubemapMaxMip - 1.0) - (1.0 - (1.2001953125 * log2(max(_778, 0.00100040435791015625))))).xyz * MobileReflectionCapture_Params.w;
    }
    uint _1028 = ((((min(uint(max(0.0, log2((_545 * MobileBasePass_Forward_LightGridZParams.x) + MobileBasePass_Forward_LightGridZParams.y) * MobileBasePass_Forward_LightGridZParams.z)), uint(MobileBasePass_Forward_CulledGridSize.z - 1)) * uint(MobileBasePass_Forward_CulledGridSize.y)) + _981.y) * uint(MobileBasePass_Forward_CulledGridSize.x)) + _981.x) * 2u;
    uvec4 _1036 = texelFetch(ps1, int(_1028 + 1u));
    uint _1037 = _1036.x;
    uint _1050 = (uint((Primitive_Flags & 1024u) != 0u) | (uint((Primitive_Flags & 2048u) != 0u) << 1u)) | (uint((Primitive_Flags & 4096u) != 0u) << 2u);
    uint _1051 = min(min(texelFetch(ps1, int(_1028)).x, MobileBasePass_Forward_NumLocalLights), MobileBasePass_Forward_NumLocalLights);
    highp vec3 _1053;
    _1053 = ((((_303 * (_315 / max(9.9999997473787516355514526367188e-06, _316))) * _70) * vec3(_293)) + ((((_338 * _938) * 1.0) + ((_938 * (_947 * (min(_944 * _944, 2048.0) * _344))) * MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.z)) * (MobileDirectionalLight_DirectionalLightColor.xyz * (_396 * mix(1.0, dot(vec4(1.0), _933), dot(_933, vec4(1.0))))))) + (((_397 * mix(1.0, min((_315 * _293) / max(MobileReflectionCapture_Params.x, 9.9999997473787516355514526367188e-05), View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.z), smoothstep(0.0, 1.0, clamp((_778 * View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.x) + View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.y, 0.0, 1.0)))) * _293) * _947);
    highp vec3 _1054;
    SPIRV_CROSS_LOOP
    for (uint _1056 = 0u; _1056 < _1051; _1053 = _1054, _1056++)
    {
        uint _1065 = texelFetch(ps2, int(_1037 + _1056)).x * 6u;
        highp vec4 _1067 = texelFetch(ps0, int(_1065));
        highp vec4 _1069 = texelFetch(ps0, int(_1065 + 1u));
        highp vec4 _1071 = texelFetch(ps0, int(_1065 + 2u));
        highp vec4 _1073 = texelFetch(ps0, int(_1065 + 3u));
        highp float _1074 = _1067.w;
        highp float _1075 = _1074 * _1074;
        highp vec3 _1076 = _1067.xyz;
        highp vec3 _1077 = in_var_TEXCOORD8.xyz - _1076;
        if ((dot(_1077, _1077) * _1075) > 1.0)
        {
            _1054 = _1053;
            continue;
        }
        uint _1084 = floatBitsToUint(_1071.w);
        if (((_1084 >> 8u) & _1050) == 0u)
        {
            _1054 = _1053;
            continue;
        }
        highp float _1093 = _1069.w;
        highp vec4 _1108 = vec4(float((_1084 & 1u) != 0u), float((_1084 & 2u) != 0u), float((_1084 & 4u) != 0u), float((_1084 & 8u) != 0u));
        highp vec3 _1109 = _1076 - in_var_TEXCOORD8.xyz;
        highp float _1110 = dot(_1109, _1109);
        highp vec3 _1112 = _1109 * inversesqrt(_1110);
        highp float _1129;
        if (_1093 == 0.0)
        {
            highp float _1121 = _1110 * _1075;
            highp float _1124 = clamp(1.0 - (_1121 * _1121), 0.0, 1.0);
            _1129 = (_1124 * _1124) * (1.0 / (_1110 + 1.0));
        }
        else
        {
            highp vec3 _1116 = _1109 * _1074;
            _1129 = pow(1.0 - clamp(dot(_1116, _1116), 0.0, 1.0), _1093);
        }
        highp float _1140;
        if (((_1084 >> 16u) & 3u) == 2u)
        {
            highp float _1137 = clamp((dot(_1112, _1071.xyz) - _1073.x) * _1073.y, 0.0, 1.0);
            _1140 = _1129 * (_1137 * _1137);
        }
        else
        {
            _1140 = _1129;
        }
        highp vec3 _1162;
        SPIRV_CROSS_BRANCH
        if (_1140 > 0.0)
        {
            highp float _1148 = max(0.0, dot(_155, normalize(_583 + _1112)));
            highp vec3 _1149 = vec3(1.0) * max(0.0, dot(_155, _1112));
            highp float _1153 = _1148 * _339;
            highp float _1155 = _339 / ((1.0 - (_1148 * _1148)) + (_1153 * _1153));
            _1162 = (((_338 * _1149) * 1.0) + ((_1149 * (_947 * (min(_1155 * _1155, 2048.0) * _344))) * 1.0)) * ((_1069.xyz * _1140) * mix(1.0, dot(vec4(1.0), _1108), dot(_1108, vec4(1.0))));
        }
        else
        {
            _1162 = vec3(0.0);
        }
        _1054 = _1053 + _1162;
    }
    vec3 _73 = _1053 * 1.0;
    vec4 _398 = vec4(_73.x, _73.y, _73.z, _537.w);
    _398.w = 0.0;
    highp vec3 _1165 = min((_398.xyz * View_PreExposure).xyz, vec3(32512.0, 32512.0, 32256.0));
    out_var_SV_Target0 = vec4(_1165.x, _1165.y, _1165.z, _398.w);
    out_var_SV_Target1 = gl_FragCoord.z;
}

