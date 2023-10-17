// ! M_Teeth_air/Default/FLocalVertexFactory/TMobileBasePassPSFMobileDistanceFieldShadowsAndLQLightMapPolicyHDRLinear64SkylightEnableLocalLights/0/MobileBasePassPixelShader.usf:Main
// Compiled by ShaderConductor
// @Inputs: f4;10:in_var_TEXCOORD10,f4;11:in_var_TEXCOORD11,f4;0:in_var_TEXCOORD0,f4;4:in_var_TEXCOORD4,f4;8:in_var_TEXCOORD8
// @Outputs: f4;0:out_Target0,f1;1:out_Target1
// @PackedUB: View(0): View_ViewToClip(128,16),View_ViewForward(264,3),View_ViewRectMin(512,4),View_PreExposure(546,1),View_NormalCurvatureToRoughnessScaleBias(732,3),View_SkyLightColor(748,4),View_MobileSkyIrradianceEnvironmentMap(752,32),View_ReflectionCubemapMaxMip(786,1),View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight(792,3),View_bSubsurfacePostprocessEnabled(987,1),View_SSProfilesTextureSizeAndInvSize(988,4)
// @PackedUB: MobileReflectionCapture(1): MobileReflectionCapture_Params(0,4)
// @PackedUB: Primitive(2): Primitive_Flags(0,1)
// @PackedUB: MobileBasePass(3): MobileBasePass_Forward_NumLocalLights(52,1),MobileBasePass_Forward_CulledGridSize(56,3),MobileBasePass_Forward_LightGridPixelSizeShift(60,1),MobileBasePass_Forward_LightGridZParams(64,3)
// @PackedUB: PrecomputedLightingBuffer(4): PrecomputedLightingBuffer_StaticShadowMapMasks(0,4),PrecomputedLightingBuffer_InvUniformPenumbraSizes(4,4),PrecomputedLightingBuffer_LightMapScale(16,8),PrecomputedLightingBuffer_LightMapAdd(24,8)
// @PackedUB: MobileDirectionalLight(5): MobileDirectionalLight_DirectionalLightColor(0,4),MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition(4,4),MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale(12,4),MobileDirectionalLight_DirectionalLightShadowMapChannelMask(84,1)
// @PackedUB: Material(6): Material_PreshaderBuffer_1(4,4),Material_PreshaderBuffer_2(8,4),Material_PreshaderBuffer_3(12,4),Material_PreshaderBuffer_4(16,4),Material_PreshaderBuffer_5(20,4),Material_PreshaderBuffer_6(24,4),Material_PreshaderBuffer_7(28,4)
// @PackedUBCopies: 0:128-0:h:0:16,0:264-0:m:0:3,0:512-0:m:4:4,0:546-0:h:16:1,0:732-0:h:20:3,0:748-0:h:24:4,0:752-0:h:28:32,0:786-0:m:8:1,0:792-0:h:60:3,0:987-0:h:64:1,0:988-0:h:68:4,1:0-1:h:0:4,2:0-2:u:0:1,3:52-3:u:0:1,3:56-3:i:0:3,3:60-3:u:4:1,3:64-3:h:0:3,4:0-4:h:0:4,4:4-4:h:4:4,4:16-4:m:0:8,4:24-4:m:8:8,5:0-5:m:0:4,5:4-5:m:4:4,5:12-5:m:8:4,5:84-5:u:0:1,6:4-6:h:0:4,6:8-6:h:4:4,6:12-6:h:8:4,6:16-6:h:12:4,6:20-6:h:16:4,6:24-6:h:20:4,6:28-6:h:24:4
// @Samplers: MobileBasePass_Forward_ForwardLocalLightBuffer(0:1),MobileBasePass_Forward_NumCulledLightsGrid(1:1),MobileBasePass_Forward_CulledLightDataGrid(2:1),View_SSProfilesTexture(3:1[View_SSProfilesSampler]),View_SSProfilesPreIntegratedTexture(4:1[View_SSProfilesPreIntegratedSampler]),MobileReflectionCapture_Texture(5:1[MobileReflectionCapture_TextureSampler]),LightmapResourceCluster_LightMapTexture(6:1[LightmapResourceCluster_LightMapSampler]),LightmapResourceCluster_StaticShadowTexture(7:1[LightmapResourceCluster_StaticShadowTextureSampler]),Material_Texture2D_0(8:1[Material_Texture2D_0Sampler]),Material_Texture2D_1(9:1[Material_Texture2D_1Sampler]),Material_Texture2D_2(10:1[Material_Texture2D_2Sampler]),Material_Texture2D_3(11:1[Material_Texture2D_3Sampler]),Material_Texture2D_4(12:1[Material_Texture2D_4Sampler]),Material_Texture2D_5(13:1[Material_Texture2D_5Sampler]),Material_Texture2D_6(14:1[Material_Texture2D_6Sampler]),Material_Texture2D_7(15:1[Material_Texture2D_7Sampler]),Material_Texture2D_8(16:1[Material_Texture2D_8Sampler]),Material_Texture2D_9(17:1[Material_Texture2D_9Sampler]),Material_Texture2D_10(18:1[Material_Texture2D_10Sampler])
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

#define View_SSProfilesTextureSizeAndInvSize (pc0_h[17])
#define View_bSubsurfacePostprocessEnabled (pc0_h[16].x)
#define View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight (pc0_h[15].xyz)
#define View_ReflectionCubemapMaxMip (pc0_m[2].x)
#define View_MobileSkyIrradianceEnvironmentMap(Offset) (pc0_h[7 + int(Offset)])
#define View_SkyLightColor (pc0_h[6])
#define View_NormalCurvatureToRoughnessScaleBias (pc0_h[5].xyz)
#define View_PreExposure (pc0_h[4].x)
#define View_ViewRectMin (pc0_m[1])
#define View_ViewForward (pc0_m[0].xyz)
#define View_ViewToClip (mat4(pc0_h[0 + 0].xyzw,pc0_h[0 + 1].xyzw,pc0_h[0 + 2].xyzw,pc0_h[0 + 3].xyzw))
#define SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler ps3
#define SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler ps4
#define SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler ps5
#define SPIRV_Cross_CombinedLightmapResourceCluster_LightMapTextureLightmapResourceCluster_LightMapSampler ps6
#define SPIRV_Cross_CombinedLightmapResourceCluster_StaticShadowTextureLightmapResourceCluster_StaticShadowTextureSampler ps7
#define SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler ps8
#define SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler ps9
#define SPIRV_Cross_CombinedMaterial_Texture2D_2Material_Texture2D_2Sampler ps10
#define SPIRV_Cross_CombinedMaterial_Texture2D_3Material_Texture2D_3Sampler ps11
#define SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler ps12
#define SPIRV_Cross_CombinedMaterial_Texture2D_5Material_Texture2D_5Sampler ps13
#define SPIRV_Cross_CombinedMaterial_Texture2D_6Material_Texture2D_6Sampler ps14
#define SPIRV_Cross_CombinedMaterial_Texture2D_7Material_Texture2D_7Sampler ps15
#define SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler ps16
#define SPIRV_Cross_CombinedMaterial_Texture2D_9Material_Texture2D_9Sampler ps17
#define SPIRV_Cross_CombinedMaterial_Texture2D_10Material_Texture2D_10Sampler ps18
uniform mediump vec4 pc0_m[3];
uniform highp vec4 pc0_h[18];


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
#define MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale (pc5_m[2])
#define MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition (pc5_m[1])
#define MobileDirectionalLight_DirectionalLightColor (pc5_m[0])
uniform uvec4 pc5_u[1];
uniform mediump vec4 pc5_m[3];


#define Material_PreshaderBuffer_7 (pc6_h[6])
#define Material_PreshaderBuffer_6 (pc6_h[5])
#define Material_PreshaderBuffer_5 (pc6_h[4])
#define Material_PreshaderBuffer_4 (pc6_h[3])
#define Material_PreshaderBuffer_3 (pc6_h[2])
#define Material_PreshaderBuffer_2 (pc6_h[1])
#define Material_PreshaderBuffer_1 (pc6_h[0])
uniform highp vec4 pc6_h[7];


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
uniform highp sampler2D SPIRV_Cross_CombinedLightmapResourceCluster_StaticShadowTextureLightmapResourceCluster_StaticShadowTextureSampler;
uniform highp sampler2D SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler;
uniform highp sampler2DArray SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler;
uniform highp samplerCube SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler;

layout(location = 0) in vec4 in_var_TEXCOORD10;
layout(location = 1) in vec4 in_var_TEXCOORD11;
layout(location = 2) in highp vec4 in_var_TEXCOORD0[1];
layout(location = 3) in highp vec4 in_var_TEXCOORD4;
layout(location = 4) in highp vec4 in_var_TEXCOORD8;
layout(location = 0) out vec4 out_var_SV_Target0;
layout(location = 1) out highp float out_var_SV_Target1;

vec3 _522;
vec4 _523;
vec3 _524;

void main()
{
    highp vec3 _556;
    if (View_ViewToClip[3].w >= 1.0)
    {
        _556 = -View_ViewForward;
    }
    else
    {
        _556 = normalize(-in_var_TEXCOORD8.xyz);
    }
    vec2 _185 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xy * vec2(2.0)) - vec2(1.0);
    highp vec3 _567 = vec4(_185, sqrt(clamp(1.0 - dot(_185, _185), 0.0, 1.0)), 1.0).xyz * Material_PreshaderBuffer_1.xyz;
    float _93 = _567.z + 1.0;
    vec2 _192 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xy * vec2(2.0)) - vec2(1.0);
    highp vec4 _578 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_2Material_Texture2D_2Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    highp float _581 = _578.x * Material_PreshaderBuffer_1.w;
    vec3 _97 = vec4(_192, sqrt(clamp(1.0 - dot(_192, _192), 0.0, 1.0)), 1.0).xyz * vec3(_581, _581, 1.0);
    vec3 _102 = vec3(_567.xy, _93);
    vec3 _106 = vec3(_97.xy * vec2(-1.0), _97.z);
    vec3 _112 = (_102 * vec3(dot(_102, _106))) - (vec3(_93) * _106);
    float _114 = _112.z + 1.0;
    vec2 _199 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_3Material_Texture2D_3Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y) * vec2(Material_PreshaderBuffer_2.x)).xy * vec2(2.0)) - vec2(1.0);
    highp vec3 _594 = mix(vec3(0.0, 0.0, 1.0), vec4(_199, sqrt(clamp(1.0 - dot(_199, _199), 0.0, 1.0)), 1.0).xyz, vec3(Material_PreshaderBuffer_2.y));
    vec3 _122 = vec3(_112.xy, _114);
    vec3 _126 = vec3(_594.xy * vec2(-1.0), _594.z);
    vec3 _132 = (_122 * vec3(dot(_122, _126))) - (vec3(_114) * _126);
    float _134 = _132.z + 1.0;
    highp vec4 _598 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    vec2 _206 = (_598.xy * vec2(2.0)) - vec2(1.0);
    highp float _601 = sqrt(clamp(1.0 - dot(_206, _206), 0.0, 1.0));
    vec3 _139 = vec3(_132.xy, _134);
    vec3 _142 = vec3(vec4(_206, _601, 1.0).xy * vec2(-1.0), _601);
    vec3 _149 = normalize(mat3(in_var_TEXCOORD10.xyz, cross(in_var_TEXCOORD11.xyz, in_var_TEXCOORD10.xyz) * in_var_TEXCOORD11.w, in_var_TEXCOORD11.xyz) * ((_139 * vec3(dot(_139, _142))) - (vec3(_134) * _142))) * 1.0;
    highp vec3 _606 = (-_556) + ((_149 * dot(_149, _556)) * 2.0);
    highp vec4 _610 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_5Material_Texture2D_5Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    highp vec4 _617 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_6Material_Texture2D_6Sampler, Material_PreshaderBuffer_3.xy);
    highp vec4 _621 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_7Material_Texture2D_7Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    vec3 _150 = _610.xyz;
    highp vec4 _628 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler, Material_PreshaderBuffer_4.xy);
    highp vec4 _634 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_9Material_Texture2D_9Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    float _161 = _634.x;
    vec3 _163 = mix(mix(_150, _617.xyz * (_150 / _621.xyz), vec3(0.669921875)), (_628.xyz * (_150 * vec3(1.0380132198333740234375, 1.27521789073944091796875, 1.815602779388427734375))) * vec3(Material_PreshaderBuffer_4.z), vec3(_161));
    highp vec4 _641 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_10Material_Texture2D_10Sampler, Material_PreshaderBuffer_5.yz);
    float _215 = _641.x;
    float _216 = _641.y;
    float _213 = _641.z;
    vec3 _172 = _578.xyz;
    vec3 _174 = normalize(in_var_TEXCOORD11.xyz);
    vec3 _221 = clamp(mix(_163, _163 * vec3((_215 <= 0.0) ? 0.0 : pow(_215, 0.300048828125), (_216 <= 0.0) ? 0.0 : pow(_216, 0.300048828125), (_213 <= 0.0) ? 0.0 : pow(_213, 0.300048828125)), vec3(_161 * clamp(1.0 - ((1.0 - _634.y) * Material_PreshaderBuffer_6.y), 0.0, 1.0))) * _172, vec3(0.0), vec3(1.0));
    float _222 = clamp((_172 * vec3(smoothstep(0.0, Material_PreshaderBuffer_6.z, dot(((vec3(dot(_556, _174)) * _174) * vec3(2.0)) - _556, _556)) * 0.449951171875)).x, 0.0, 1.0);
    highp float _663 = max(0.015625, clamp(mix(Material_PreshaderBuffer_7.x, Material_PreshaderBuffer_6.w, _161), 0.0, 1.0));
    vec3 _225 = dFdx(_149);
    vec3 _226 = dFdy(_149);
    highp float _669 = clamp(pow(max(dot(_225, _225), dot(_226, _226)), View_NormalCurvatureToRoughnessScaleBias.z), 0.001000000047497451305389404296875, 1.0);
    vec3 _230 = vec3(0.07999999821186065673828125 * _222);
    highp vec2 _673 = in_var_TEXCOORD4.xy * vec2(1.0, 0.5);
    vec3 _238 = (texture(SPIRV_Cross_CombinedLightmapResourceCluster_LightMapTextureLightmapResourceCluster_LightMapSampler, _673).xyz * PrecomputedLightingBuffer_LightMapScale(0).xyz) + PrecomputedLightingBuffer_LightMapAdd(0).xyz;
    float _251 = dot(_238, vec3(0.300048828125, 0.58984375, 0.1099853515625));
    float _250 = (exp2((_251 * 16.0) - 8.0) - 0.00390625) * max(0.0, dot((texture(SPIRV_Cross_CombinedLightmapResourceCluster_LightMapTextureLightmapResourceCluster_LightMapSampler, _673 + vec2(0.0, 0.5)) * PrecomputedLightingBuffer_LightMapScale(1)) + PrecomputedLightingBuffer_LightMapAdd(1), vec4(_149.yzx, 1.0)));
    highp vec4 _694 = vec4(_149, 1.0);
    highp vec3 _698 = _522;
    _698.x = dot(View_MobileSkyIrradianceEnvironmentMap(0), _694);
    highp vec3 _702 = _698;
    _702.y = dot(View_MobileSkyIrradianceEnvironmentMap(1), _694);
    highp vec3 _706 = _702;
    _706.z = dot(View_MobileSkyIrradianceEnvironmentMap(2), _694);
    vec3 _252 = max(vec3(0.0), _706) * View_SkyLightColor.xyz;
    highp vec4 _712 = texture(SPIRV_Cross_CombinedLightmapResourceCluster_StaticShadowTextureLightmapResourceCluster_StaticShadowTextureSampler, in_var_TEXCOORD4.zw);
    highp vec4 _719 = clamp((_712 * PrecomputedLightingBuffer_InvUniformPenumbraSizes) + ((PrecomputedLightingBuffer_InvUniformPenumbraSizes * (-0.5)) + vec4(0.5)), vec4(0.0), vec4(1.0));
    highp vec4 _723 = (PrecomputedLightingBuffer_StaticShadowMapMasks * _719) * _719;
    highp vec4 _741 = vec4(float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 1u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 2u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 4u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 8u) != 0u));
    float _262 = mix(1.0, dot(_723, _741), dot(_741, vec4(1.0)));
    highp float _745 = max(0.0, dot(_149, normalize(_556 + MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz)));
    uint _748 = uint(((vec4(_524.x, _524.y, _524.z, vec4(1.0, 1.0, 1.0, Material_PreshaderBuffer_7.y).w) * View_bSubsurfacePostprocessEnabled).w * 255.0) + 0.5);
    highp vec2 _757 = (vec2(uvec2(5u, _748)) + vec2(0.5)) * View_SSProfilesTextureSizeAndInvSize.zw;
    highp vec4 _759 = textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _757, 0.0);
    float _276 = _759.z;
    highp float _762 = max(clamp(_663 * (_759.x * 2.0), 0.0, 1.0), 0.0199999995529651641845703125);
    float _280 = clamp(_663 * (_759.y * 2.0), 0.0, 1.0);
    float _266 = mix(_762, _280, _276);
    float _267 = dot(_149, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz);
    highp float _769 = float(_748);
    highp vec2 _778 = (vec2(uvec2(0u, _748)) + vec2(0.5)) * View_SSProfilesTextureSizeAndInvSize.zw;
    highp vec3 _781 = vec3(1.0) * max(0.0, dot(_149, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz));
    vec3 _283 = _221 * 0.318407952785491943359375;
    highp float _786 = 1.0 - (_745 * _745);
    float _284 = _762 * _762;
    highp float _787 = _745 * _284;
    highp float _789 = _284 / (_786 + (_787 * _787));
    float _288 = _280 * _280;
    highp float _790 = _745 * _288;
    highp float _792 = _288 / (_786 + (_790 * _790));
    vec4 _302 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _266) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
    float _303 = _302.x;
    float _306 = exp2((-9.28125) * clamp(abs(dot(_149, _556)) + 1.0013580322265625e-05, 0.0, 1.0));
    vec2 _313 = (vec2(-1.0400390625, 1.0400390625) * ((min(_303 * _303, _306) * _303) + _302.y)) + _302.zw;
    float _297 = clamp(_222 * 4.0, 0.0, 1.0);
    highp vec2 _805 = gl_FragCoord.xy - View_ViewRectMin.xy;
    uvec2 _832 = uvec2(uint(_805.x), uint(_805.y)) >> (uvec2(MobileBasePass_Forward_LightGridPixelSizeShift) & uvec2(31u));
    vec3 _393;
    if (float(MobileReflectionCapture_Params.y > 0.0) != 0.0)
    {
        _393 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _606, (MobileReflectionCapture_Params.y - 1.0) - (1.0 - (1.2001953125 * log2(max(_663, 0.00100040435791015625))))).xyz * View_SkyLightColor.xyz;
    }
    else
    {
        _393 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _606, (View_ReflectionCubemapMaxMip - 1.0) - (1.0 - (1.2001953125 * log2(max(_663, 0.00100040435791015625))))).xyz * MobileReflectionCapture_Params.w;
    }
    vec4 _337 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _663) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
    float _338 = _337.x;
    vec2 _346 = (vec2(-1.0400390625, 1.0400390625) * ((min(_338 * _338, _306) * _338) + _337.y)) + _337.zw;
    highp vec3 _880 = ((((_238 * (_250 / max(9.9999997473787516355514526367188e-06, _251))) + _252) * _221) + ((((mix(_781 * _262, textureLod(SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler, vec3((max(_267 - (max(2.0 * _267, 0.4000000059604644775390625) * (1.0 - sqrt(_262))), -1.0) * 0.5) + 0.5, _669, _769), 0.0).xyz, textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _778, 0.0).xyz) * _283) * 1.0) + ((_781 * (((_230 * _313.x) + vec3(_297 * _313.y)) * (mix(min(_789 * _789, 2048.0), min(_792 * _792, 2048.0), _276) * ((_266 * 0.25) + 0.25)))) * MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.z)) * (MobileDirectionalLight_DirectionalLightColor.xyz * _262))) + (((_393 * mix(1.0, min((_250 + dot(_252, vec3(0.300048828125, 0.58984375, 0.1099853515625))) / max(MobileReflectionCapture_Params.x, 9.9999997473787516355514526367188e-05), View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.z), smoothstep(0.0, 1.0, clamp((_663 * View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.x) + View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.y, 0.0, 1.0)))) * 1.0) * ((_230 * _346.x) + vec3(_297 * _346.y)));
    uint _881 = ((((min(uint(max(0.0, log2(((1.0 / gl_FragCoord.w) * MobileBasePass_Forward_LightGridZParams.x) + MobileBasePass_Forward_LightGridZParams.y) * MobileBasePass_Forward_LightGridZParams.z)), uint(MobileBasePass_Forward_CulledGridSize.z - 1)) * uint(MobileBasePass_Forward_CulledGridSize.y)) + _832.y) * uint(MobileBasePass_Forward_CulledGridSize.x)) + _832.x) * 2u;
    uvec4 _889 = texelFetch(ps1, int(_881 + 1u));
    uint _890 = _889.x;
    uint _905 = (uint((Primitive_Flags & 1024u) != 0u) | (uint((Primitive_Flags & 2048u) != 0u) << 1u)) | (uint((Primitive_Flags & 4096u) != 0u) << 2u);
    uint _906 = min(min(texelFetch(ps1, int(_881)).x, MobileBasePass_Forward_NumLocalLights), MobileBasePass_Forward_NumLocalLights);
    highp vec3 _908;
    _908 = _880;
    highp vec3 _909;
    SPIRV_CROSS_LOOP
    for (uint _911 = 0u; _911 < _906; _908 = _909, _911++)
    {
        uint _920 = texelFetch(ps2, int(_890 + _911)).x * 6u;
        highp vec4 _922 = texelFetch(ps0, int(_920));
        highp vec4 _924 = texelFetch(ps0, int(_920 + 1u));
        highp vec4 _926 = texelFetch(ps0, int(_920 + 2u));
        highp vec4 _928 = texelFetch(ps0, int(_920 + 3u));
        highp float _929 = _922.w;
        highp float _930 = _929 * _929;
        highp vec3 _931 = _922.xyz;
        highp vec3 _932 = in_var_TEXCOORD8.xyz - _931;
        if ((dot(_932, _932) * _930) > 1.0)
        {
            _909 = _908;
            continue;
        }
        uint _939 = floatBitsToUint(_926.w);
        if (((_939 >> 8u) & _905) == 0u)
        {
            _909 = _908;
            continue;
        }
        highp float _948 = _924.w;
        highp vec4 _963 = vec4(float((_939 & 1u) != 0u), float((_939 & 2u) != 0u), float((_939 & 4u) != 0u), float((_939 & 8u) != 0u));
        highp vec3 _964 = _931 - in_var_TEXCOORD8.xyz;
        highp float _965 = dot(_964, _964);
        highp vec3 _967 = _964 * inversesqrt(_965);
        highp float _984;
        if (_948 == 0.0)
        {
            highp float _976 = _965 * _930;
            highp float _979 = clamp(1.0 - (_976 * _976), 0.0, 1.0);
            _984 = (_979 * _979) * (1.0 / (_965 + 1.0));
        }
        else
        {
            highp vec3 _971 = _964 * _929;
            _984 = pow(1.0 - clamp(dot(_971, _971), 0.0, 1.0), _948);
        }
        highp float _995;
        if (((_939 >> 16u) & 3u) == 2u)
        {
            highp float _992 = clamp((dot(_967, _926.xyz) - _928.x) * _928.y, 0.0, 1.0);
            _995 = _984 * (_992 * _992);
        }
        else
        {
            _995 = _984;
        }
        highp vec3 _1042;
        SPIRV_CROSS_BRANCH
        if (_995 > 0.0)
        {
            float _350 = mix(1.0, dot(_723, _963), dot(_963, vec4(1.0)));
            highp float _1003 = max(0.0, dot(_149, normalize(_556 + _967)));
            highp vec4 _1005 = textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _757, 0.0);
            float _360 = _1005.z;
            highp float _1008 = max(clamp(_663 * (_1005.x * 2.0), 0.0, 1.0), 0.0199999995529651641845703125);
            float _364 = clamp(_663 * (_1005.y * 2.0), 0.0, 1.0);
            float _351 = mix(_1008, _364, _360);
            float _352 = dot(_149, _967);
            highp vec3 _1020 = vec3(1.0) * max(0.0, dot(_149, _967));
            highp float _1025 = 1.0 - (_1003 * _1003);
            float _367 = _1008 * _1008;
            highp float _1026 = _1003 * _367;
            highp float _1028 = _367 / (_1025 + (_1026 * _1026));
            float _371 = _364 * _364;
            highp float _1029 = _1003 * _371;
            highp float _1031 = _371 / (_1025 + (_1029 * _1029));
            vec4 _383 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _351) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
            float _384 = _383.x;
            vec2 _392 = (vec2(-1.0400390625, 1.0400390625) * ((min(_384 * _384, _306) * _384) + _383.y)) + _383.zw;
            _1042 = (((mix(_1020 * _350, textureLod(SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler, vec3((max(_352 - (max(2.0 * _352, 0.4000000059604644775390625) * (1.0 - sqrt(_350))), -1.0) * 0.5) + 0.5, _669, _769), 0.0).xyz, textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _778, 0.0).xyz) * _283) * 1.0) + ((_1020 * (((_230 * _392.x) + vec3(_297 * _392.y)) * (mix(min(_1028 * _1028, 2048.0), min(_1031 * _1031, 2048.0), _360) * ((_351 * 0.25) + 0.25)))) * 1.0)) * ((_924.xyz * _995) * _350);
        }
        else
        {
            _1042 = vec3(0.0);
        }
        _909 = _908 + _1042;
    }
    vec3 _77 = _908 * 1.0;
    vec4 _394 = vec4(_77.x, _77.y, _77.z, _523.w);
    _394.w = 0.0;
    highp vec3 _1046 = min((_394.xyz * View_PreExposure).xyz, vec3(32512.0, 32512.0, 32256.0));
    out_var_SV_Target0 = vec4(_1046.x, _1046.y, _1046.z, _394.w);
    out_var_SV_Target1 = gl_FragCoord.z;
}

