// ! M_Teeth_air/Default/FLocalVertexFactory/TMobileBasePassPSFMobileDistanceFieldShadowsLightMapAndCSMLightingPolicyHDRLinear64EnableLocalLights/0/MobileBasePassPixelShader.usf:Main
// Compiled by ShaderConductor
// @Inputs: f4;10:in_var_TEXCOORD10,f4;11:in_var_TEXCOORD11,f4;0:in_var_TEXCOORD0,f4;4:in_var_TEXCOORD4,f4;8:in_var_TEXCOORD8
// @Outputs: f4;0:out_Target0,f1;1:out_Target1
// @PackedUB: View(0): View_ViewToClip(128,16),View_ViewForward(264,3),View_ViewRectMin(512,4),View_ViewSizeAndInvSize(516,4),View_PreExposure(546,1),View_NormalCurvatureToRoughnessScaleBias(732,3),View_SkyLightColor(748,4),View_ReflectionCubemapMaxMip(786,1),View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight(792,3),View_bSubsurfacePostprocessEnabled(987,1),View_SSProfilesTextureSizeAndInvSize(988,4)
// @PackedUB: MobileReflectionCapture(1): MobileReflectionCapture_Params(0,4)
// @PackedUB: Primitive(2): Primitive_Flags(0,1)
// @PackedUB: MobileBasePass(3): MobileBasePass_Forward_NumLocalLights(52,1),MobileBasePass_Forward_CulledGridSize(56,3),MobileBasePass_Forward_LightGridPixelSizeShift(60,1),MobileBasePass_Forward_LightGridZParams(64,3)
// @PackedUB: PrecomputedLightingBuffer(4): PrecomputedLightingBuffer_StaticShadowMapMasks(0,4),PrecomputedLightingBuffer_InvUniformPenumbraSizes(4,4),PrecomputedLightingBuffer_LightMapScale(16,8),PrecomputedLightingBuffer_LightMapAdd(24,8)
// @PackedUB: MobileDirectionalLight(5): MobileDirectionalLight_DirectionalLightColor(0,4),MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition(4,4),MobileDirectionalLight_DirectionalLightShadowSize(8,4),MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale(12,4),MobileDirectionalLight_DirectionalLightShadowDistances(16,4),MobileDirectionalLight_DirectionalLightScreenToShadow(20,64),MobileDirectionalLight_DirectionalLightShadowMapChannelMask(84,1)
// @PackedUB: Material(6): Material_PreshaderBuffer_1(4,4),Material_PreshaderBuffer_2(8,4),Material_PreshaderBuffer_3(12,4),Material_PreshaderBuffer_4(16,4),Material_PreshaderBuffer_5(20,4),Material_PreshaderBuffer_6(24,4),Material_PreshaderBuffer_7(28,4)
// @PackedUBCopies: 0:128-0:h:0:16,0:264-0:m:0:3,0:512-0:m:4:4,0:516-0:h:16:4,0:546-0:h:20:1,0:732-0:h:24:3,0:748-0:h:28:4,0:786-0:m:8:1,0:792-0:h:32:3,0:987-0:h:36:1,0:988-0:h:40:4,1:0-1:h:0:4,2:0-2:u:0:1,3:52-3:u:0:1,3:56-3:i:0:3,3:60-3:u:4:1,3:64-3:h:0:3,4:0-4:h:0:4,4:4-4:h:4:4,4:16-4:m:0:8,4:24-4:m:8:8,5:0-5:m:0:4,5:4-5:m:4:4,5:8-5:m:8:4,5:12-5:m:12:4,5:16-5:m:16:4,5:20-5:h:0:64,5:84-5:u:0:1,6:4-6:h:0:4,6:8-6:h:4:4,6:12-6:h:8:4,6:16-6:h:12:4,6:20-6:h:16:4,6:24-6:h:20:4,6:28-6:h:24:4
// @Samplers: MobileBasePass_Forward_ForwardLocalLightBuffer(0:1),MobileBasePass_Forward_NumCulledLightsGrid(1:1),MobileBasePass_Forward_CulledLightDataGrid(2:1),View_SSProfilesTexture(3:1[View_SSProfilesSampler]),View_SSProfilesPreIntegratedTexture(4:1[View_SSProfilesPreIntegratedSampler]),MobileReflectionCapture_Texture(5:1[MobileReflectionCapture_TextureSampler]),LightmapResourceCluster_LightMapTexture(6:1[LightmapResourceCluster_LightMapSampler]),LightmapResourceCluster_StaticShadowTexture(7:1[LightmapResourceCluster_StaticShadowTextureSampler]),MobileDirectionalLight_DirectionalLightShadowTexture(8:1[MobileDirectionalLight_DirectionalLightShadowSampler]),Material_Texture2D_0(9:1[Material_Texture2D_0Sampler]),Material_Texture2D_1(10:1[Material_Texture2D_1Sampler]),Material_Texture2D_2(11:1[Material_Texture2D_2Sampler]),Material_Texture2D_3(12:1[Material_Texture2D_3Sampler]),Material_Texture2D_4(13:1[Material_Texture2D_4Sampler]),Material_Texture2D_5(14:1[Material_Texture2D_5Sampler]),Material_Texture2D_6(15:1[Material_Texture2D_6Sampler]),Material_Texture2D_7(16:1[Material_Texture2D_7Sampler]),Material_Texture2D_8(17:1[Material_Texture2D_8Sampler]),Material_Texture2D_9(18:1[Material_Texture2D_9Sampler]),Material_Texture2D_10(19:1[Material_Texture2D_10Sampler])
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

#define View_SSProfilesTextureSizeAndInvSize (pc0_h[10])
#define View_bSubsurfacePostprocessEnabled (pc0_h[9].x)
#define View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight (pc0_h[8].xyz)
#define View_ReflectionCubemapMaxMip (pc0_m[2].x)
#define View_SkyLightColor (pc0_h[7])
#define View_NormalCurvatureToRoughnessScaleBias (pc0_h[6].xyz)
#define View_PreExposure (pc0_h[5].x)
#define View_ViewSizeAndInvSize (pc0_h[4])
#define View_ViewRectMin (pc0_m[1])
#define View_ViewForward (pc0_m[0].xyz)
#define View_ViewToClip (mat4(pc0_h[0 + 0].xyzw,pc0_h[0 + 1].xyzw,pc0_h[0 + 2].xyzw,pc0_h[0 + 3].xyzw))
#define SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler ps3
#define SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler ps4
#define SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler ps5
#define SPIRV_Cross_CombinedLightmapResourceCluster_LightMapTextureLightmapResourceCluster_LightMapSampler ps6
#define SPIRV_Cross_CombinedLightmapResourceCluster_StaticShadowTextureLightmapResourceCluster_StaticShadowTextureSampler ps7
#define SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler ps8
#define SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler ps9
#define SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler ps10
#define SPIRV_Cross_CombinedMaterial_Texture2D_2Material_Texture2D_2Sampler ps11
#define SPIRV_Cross_CombinedMaterial_Texture2D_3Material_Texture2D_3Sampler ps12
#define SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler ps13
#define SPIRV_Cross_CombinedMaterial_Texture2D_5Material_Texture2D_5Sampler ps14
#define SPIRV_Cross_CombinedMaterial_Texture2D_6Material_Texture2D_6Sampler ps15
#define SPIRV_Cross_CombinedMaterial_Texture2D_7Material_Texture2D_7Sampler ps16
#define SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler ps17
#define SPIRV_Cross_CombinedMaterial_Texture2D_9Material_Texture2D_9Sampler ps18
#define SPIRV_Cross_CombinedMaterial_Texture2D_10Material_Texture2D_10Sampler ps19
uniform mediump vec4 pc0_m[3];
uniform highp vec4 pc0_h[11];


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
uniform highp sampler2D SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler;
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

vec4 _538;
vec3 _539;

void main()
{
    highp float _548 = 1.0 / gl_FragCoord.w;
    highp vec2 _566 = gl_FragCoord.xy - View_ViewRectMin.xy;
    highp vec4 _575 = vec4(((_566 * View_ViewSizeAndInvSize.zw) - vec2(0.5)) * vec2(2.0, -2.0), gl_FragCoord.z, 1.0) * _548;
    highp vec3 _584;
    if (View_ViewToClip[3].w >= 1.0)
    {
        _584 = -View_ViewForward;
    }
    else
    {
        _584 = normalize(-in_var_TEXCOORD8.xyz);
    }
    vec2 _188 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xy * vec2(2.0)) - vec2(1.0);
    highp vec3 _595 = vec4(_188, sqrt(clamp(1.0 - dot(_188, _188), 0.0, 1.0)), 1.0).xyz * Material_PreshaderBuffer_1.xyz;
    float _96 = _595.z + 1.0;
    vec2 _195 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xy * vec2(2.0)) - vec2(1.0);
    highp vec4 _606 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_2Material_Texture2D_2Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    highp float _609 = _606.x * Material_PreshaderBuffer_1.w;
    vec3 _100 = vec4(_195, sqrt(clamp(1.0 - dot(_195, _195), 0.0, 1.0)), 1.0).xyz * vec3(_609, _609, 1.0);
    vec3 _105 = vec3(_595.xy, _96);
    vec3 _109 = vec3(_100.xy * vec2(-1.0), _100.z);
    vec3 _115 = (_105 * vec3(dot(_105, _109))) - (vec3(_96) * _109);
    float _117 = _115.z + 1.0;
    vec2 _202 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_3Material_Texture2D_3Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y) * vec2(Material_PreshaderBuffer_2.x)).xy * vec2(2.0)) - vec2(1.0);
    highp vec3 _622 = mix(vec3(0.0, 0.0, 1.0), vec4(_202, sqrt(clamp(1.0 - dot(_202, _202), 0.0, 1.0)), 1.0).xyz, vec3(Material_PreshaderBuffer_2.y));
    vec3 _125 = vec3(_115.xy, _117);
    vec3 _129 = vec3(_622.xy * vec2(-1.0), _622.z);
    vec3 _135 = (_125 * vec3(dot(_125, _129))) - (vec3(_117) * _129);
    float _137 = _135.z + 1.0;
    highp vec4 _626 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    vec2 _209 = (_626.xy * vec2(2.0)) - vec2(1.0);
    highp float _629 = sqrt(clamp(1.0 - dot(_209, _209), 0.0, 1.0));
    vec3 _142 = vec3(_135.xy, _137);
    vec3 _145 = vec3(vec4(_209, _629, 1.0).xy * vec2(-1.0), _629);
    vec3 _152 = normalize(mat3(in_var_TEXCOORD10.xyz, cross(in_var_TEXCOORD11.xyz, in_var_TEXCOORD10.xyz) * in_var_TEXCOORD11.w, in_var_TEXCOORD11.xyz) * ((_142 * vec3(dot(_142, _145))) - (vec3(_137) * _145))) * 1.0;
    highp vec3 _634 = (-_584) + ((_152 * dot(_152, _584)) * 2.0);
    highp vec4 _638 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_5Material_Texture2D_5Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    highp vec4 _645 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_6Material_Texture2D_6Sampler, Material_PreshaderBuffer_3.xy);
    highp vec4 _649 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_7Material_Texture2D_7Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    vec3 _153 = _638.xyz;
    highp vec4 _656 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler, Material_PreshaderBuffer_4.xy);
    highp vec4 _662 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_9Material_Texture2D_9Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    float _164 = _662.x;
    vec3 _166 = mix(mix(_153, _645.xyz * (_153 / _649.xyz), vec3(0.669921875)), (_656.xyz * (_153 * vec3(1.0380132198333740234375, 1.27521789073944091796875, 1.815602779388427734375))) * vec3(Material_PreshaderBuffer_4.z), vec3(_164));
    highp vec4 _669 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_10Material_Texture2D_10Sampler, Material_PreshaderBuffer_5.yz);
    float _218 = _669.x;
    float _219 = _669.y;
    float _216 = _669.z;
    vec3 _175 = _606.xyz;
    vec3 _177 = normalize(in_var_TEXCOORD11.xyz);
    vec3 _224 = clamp(mix(_166, _166 * vec3((_218 <= 0.0) ? 0.0 : pow(_218, 0.300048828125), (_219 <= 0.0) ? 0.0 : pow(_219, 0.300048828125), (_216 <= 0.0) ? 0.0 : pow(_216, 0.300048828125)), vec3(_164 * clamp(1.0 - ((1.0 - _662.y) * Material_PreshaderBuffer_6.y), 0.0, 1.0))) * _175, vec3(0.0), vec3(1.0));
    float _225 = clamp((_175 * vec3(smoothstep(0.0, Material_PreshaderBuffer_6.z, dot(((vec3(dot(_584, _177)) * _177) * vec3(2.0)) - _584, _584)) * 0.449951171875)).x, 0.0, 1.0);
    highp float _691 = max(0.015625, clamp(mix(Material_PreshaderBuffer_7.x, Material_PreshaderBuffer_6.w, _164), 0.0, 1.0));
    vec3 _228 = dFdx(_152);
    vec3 _229 = dFdy(_152);
    highp float _697 = clamp(pow(max(dot(_228, _228), dot(_229, _229)), View_NormalCurvatureToRoughnessScaleBias.z), 0.001000000047497451305389404296875, 1.0);
    vec3 _233 = vec3(0.07999999821186065673828125 * _225);
    highp vec2 _700 = in_var_TEXCOORD4.xy * vec2(1.0, 0.5);
    highp vec4 _705 = texture(SPIRV_Cross_CombinedLightmapResourceCluster_LightMapTextureLightmapResourceCluster_LightMapSampler, _700);
    highp vec4 _707 = texture(SPIRV_Cross_CombinedLightmapResourceCluster_LightMapTextureLightmapResourceCluster_LightMapSampler, _700 + vec2(0.0, 0.5));
    vec3 _240 = (_705.xyz * PrecomputedLightingBuffer_LightMapScale(0).xyz) + PrecomputedLightingBuffer_LightMapAdd(0).xyz;
    float _253 = dot(_240, vec3(0.300048828125, 0.58984375, 0.1099853515625));
    float _252 = (exp2((_253 * 16.0) - 8.0) - 0.00390625) * max(0.0, dot((_707 * PrecomputedLightingBuffer_LightMapScale(1)) + PrecomputedLightingBuffer_LightMapAdd(1), vec4(_152.yzx, 1.0)));
    highp vec4 _722 = texture(SPIRV_Cross_CombinedLightmapResourceCluster_StaticShadowTextureLightmapResourceCluster_StaticShadowTextureSampler, in_var_TEXCOORD4.zw);
    highp vec4 _729 = clamp((_722 * PrecomputedLightingBuffer_InvUniformPenumbraSizes) + ((PrecomputedLightingBuffer_InvUniformPenumbraSizes * (-0.5)) + vec4(0.5)), vec4(0.0), vec4(1.0));
    highp vec4 _733 = (PrecomputedLightingBuffer_StaticShadowMapMasks * _729) * _729;
    highp float _734 = _575.w;
    highp vec4 _758;
    int _741 = 0;
    for (;;)
    {
        if (_741 < 4)
        {
            if (_734 < MobileDirectionalLight_DirectionalLightShadowDistances[uint(_741)])
            {
                _758 = MobileDirectionalLight_DirectionalLightScreenToShadow(_741) * vec4(_575.xy, _734, 1.0);
                break;
            }
            _741++;
            continue;
        }
        else
        {
            _758 = vec4(0.0);
            break;
        }
    }
    float _398;
    if (_758.z > 0.0)
    {
        highp vec2 _768 = (_758.xy * MobileDirectionalLight_DirectionalLightShadowSize.xy) - vec2(0.5);
        highp vec2 _769 = fract(_768);
        highp vec2 _773 = (floor(_768) + vec2(1.0)) * MobileDirectionalLight_DirectionalLightShadowSize.zw;
        highp vec4 _779 = vec4((min(1.0 - _758.z, 0.999989986419677734375) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - 1.0);
        highp vec4 _781 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _773, ivec2(-1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _779, vec4(0.0), vec4(1.0));
        highp vec4 _786 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _773, ivec2(1, -1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _779, vec4(0.0), vec4(1.0));
        highp vec4 _791 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _773, ivec2(-1, 1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _779, vec4(0.0), vec4(1.0));
        highp vec4 _796 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _773, ivec2(1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _779, vec4(0.0), vec4(1.0));
        highp float _798 = _769.x;
        highp float _799 = 1.0 - _798;
        highp vec4 _826 = _538;
        _826.x = (((_781.w * _799) + _781.z) + _786.w) + (_786.z * _798);
        highp vec4 _830 = _826;
        _830.y = (((_781.x * _799) + _781.y) + _786.x) + (_786.y * _798);
        highp vec4 _834 = _830;
        _834.z = (((_791.w * _799) + _791.z) + _796.w) + (_796.z * _798);
        highp vec4 _838 = _834;
        _838.w = (((_791.x * _799) + _791.y) + _796.x) + (_796.y * _798);
        highp float _839 = _769.y;
        highp float _848 = clamp((_734 * MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.x) + MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.y, 0.0, 1.0);
        _398 = mix(dot(_838, vec4(1.0 - _839, 1.0, 1.0, _839) * 0.111111111938953399658203125), 1.0, _848 * _848);
    }
    else
    {
        _398 = 1.0;
    }
    highp vec4 _867 = vec4(float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 1u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 2u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 4u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 8u) != 0u));
    float _267 = _398 * mix(1.0, dot(_733, _867), dot(_867, vec4(1.0)));
    highp float _871 = max(0.0, dot(_152, normalize(_584 + MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz)));
    uint _874 = uint(((vec4(_539.x, _539.y, _539.z, vec4(1.0, 1.0, 1.0, Material_PreshaderBuffer_7.y).w) * View_bSubsurfacePostprocessEnabled).w * 255.0) + 0.5);
    highp vec2 _883 = (vec2(uvec2(5u, _874)) + vec2(0.5)) * View_SSProfilesTextureSizeAndInvSize.zw;
    highp vec4 _885 = textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _883, 0.0);
    float _281 = _885.z;
    highp float _888 = max(clamp(_691 * (_885.x * 2.0), 0.0, 1.0), 0.0199999995529651641845703125);
    float _285 = clamp(_691 * (_885.y * 2.0), 0.0, 1.0);
    float _271 = mix(_888, _285, _281);
    float _272 = dot(_152, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz);
    highp float _895 = float(_874);
    highp vec2 _904 = (vec2(uvec2(0u, _874)) + vec2(0.5)) * View_SSProfilesTextureSizeAndInvSize.zw;
    highp vec3 _907 = vec3(1.0) * max(0.0, dot(_152, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz));
    vec3 _288 = _224 * 0.318407952785491943359375;
    highp float _912 = 1.0 - (_871 * _871);
    float _289 = _888 * _888;
    highp float _913 = _871 * _289;
    highp float _915 = _289 / (_912 + (_913 * _913));
    float _293 = _285 * _285;
    highp float _916 = _871 * _293;
    highp float _918 = _293 / (_912 + (_916 * _916));
    vec4 _307 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _271) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
    float _308 = _307.x;
    float _311 = exp2((-9.28125) * clamp(abs(dot(_152, _584)) + 1.0013580322265625e-05, 0.0, 1.0));
    vec2 _318 = (vec2(-1.0400390625, 1.0400390625) * ((min(_308 * _308, _311) * _308) + _307.y)) + _307.zw;
    float _302 = clamp(_225 * 4.0, 0.0, 1.0);
    uvec2 _956 = uvec2(uint(_566.x), uint(_566.y)) >> (uvec2(MobileBasePass_Forward_LightGridPixelSizeShift) & uvec2(31u));
    vec3 _399;
    if (float(MobileReflectionCapture_Params.y > 0.0) != 0.0)
    {
        _399 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _634, (MobileReflectionCapture_Params.y - 1.0) - (1.0 - (1.2001953125 * log2(max(_691, 0.00100040435791015625))))).xyz * View_SkyLightColor.xyz;
    }
    else
    {
        _399 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _634, (View_ReflectionCubemapMaxMip - 1.0) - (1.0 - (1.2001953125 * log2(max(_691, 0.00100040435791015625))))).xyz * MobileReflectionCapture_Params.w;
    }
    vec4 _342 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _691) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
    float _343 = _342.x;
    vec2 _351 = (vec2(-1.0400390625, 1.0400390625) * ((min(_343 * _343, _311) * _343) + _342.y)) + _342.zw;
    highp vec3 _1005 = (((_240 * (_252 / max(9.9999997473787516355514526367188e-06, _253))) * _224) + ((((mix(_907 * _267, textureLod(SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler, vec3((max(_272 - (max(2.0 * _272, 0.4000000059604644775390625) * (1.0 - sqrt(_267))), -1.0) * 0.5) + 0.5, _697, _895), 0.0).xyz, textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _904, 0.0).xyz) * _288) * 1.0) + ((_907 * (((_233 * _318.x) + vec3(_302 * _318.y)) * (mix(min(_915 * _915, 2048.0), min(_918 * _918, 2048.0), _281) * ((_271 * 0.25) + 0.25)))) * MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.z)) * (MobileDirectionalLight_DirectionalLightColor.xyz * _267))) + (((_399 * mix(1.0, min(_252 / max(MobileReflectionCapture_Params.x, 9.9999997473787516355514526367188e-05), View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.z), smoothstep(0.0, 1.0, clamp((_691 * View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.x) + View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.y, 0.0, 1.0)))) * 1.0) * ((_233 * _351.x) + vec3(_302 * _351.y)));
    uint _1006 = ((((min(uint(max(0.0, log2((_548 * MobileBasePass_Forward_LightGridZParams.x) + MobileBasePass_Forward_LightGridZParams.y) * MobileBasePass_Forward_LightGridZParams.z)), uint(MobileBasePass_Forward_CulledGridSize.z - 1)) * uint(MobileBasePass_Forward_CulledGridSize.y)) + _956.y) * uint(MobileBasePass_Forward_CulledGridSize.x)) + _956.x) * 2u;
    uvec4 _1014 = texelFetch(ps1, int(_1006 + 1u));
    uint _1015 = _1014.x;
    uint _1030 = (uint((Primitive_Flags & 1024u) != 0u) | (uint((Primitive_Flags & 2048u) != 0u) << 1u)) | (uint((Primitive_Flags & 4096u) != 0u) << 2u);
    uint _1031 = min(min(texelFetch(ps1, int(_1006)).x, MobileBasePass_Forward_NumLocalLights), MobileBasePass_Forward_NumLocalLights);
    highp vec3 _1033;
    _1033 = _1005;
    highp vec3 _1034;
    SPIRV_CROSS_LOOP
    for (uint _1036 = 0u; _1036 < _1031; _1033 = _1034, _1036++)
    {
        uint _1045 = texelFetch(ps2, int(_1015 + _1036)).x * 6u;
        highp vec4 _1047 = texelFetch(ps0, int(_1045));
        highp vec4 _1049 = texelFetch(ps0, int(_1045 + 1u));
        highp vec4 _1051 = texelFetch(ps0, int(_1045 + 2u));
        highp vec4 _1053 = texelFetch(ps0, int(_1045 + 3u));
        highp float _1054 = _1047.w;
        highp float _1055 = _1054 * _1054;
        highp vec3 _1056 = _1047.xyz;
        highp vec3 _1057 = in_var_TEXCOORD8.xyz - _1056;
        if ((dot(_1057, _1057) * _1055) > 1.0)
        {
            _1034 = _1033;
            continue;
        }
        uint _1064 = floatBitsToUint(_1051.w);
        if (((_1064 >> 8u) & _1030) == 0u)
        {
            _1034 = _1033;
            continue;
        }
        highp float _1073 = _1049.w;
        highp vec4 _1088 = vec4(float((_1064 & 1u) != 0u), float((_1064 & 2u) != 0u), float((_1064 & 4u) != 0u), float((_1064 & 8u) != 0u));
        highp vec3 _1089 = _1056 - in_var_TEXCOORD8.xyz;
        highp float _1090 = dot(_1089, _1089);
        highp vec3 _1092 = _1089 * inversesqrt(_1090);
        highp float _1109;
        if (_1073 == 0.0)
        {
            highp float _1101 = _1090 * _1055;
            highp float _1104 = clamp(1.0 - (_1101 * _1101), 0.0, 1.0);
            _1109 = (_1104 * _1104) * (1.0 / (_1090 + 1.0));
        }
        else
        {
            highp vec3 _1096 = _1089 * _1054;
            _1109 = pow(1.0 - clamp(dot(_1096, _1096), 0.0, 1.0), _1073);
        }
        highp float _1120;
        if (((_1064 >> 16u) & 3u) == 2u)
        {
            highp float _1117 = clamp((dot(_1092, _1051.xyz) - _1053.x) * _1053.y, 0.0, 1.0);
            _1120 = _1109 * (_1117 * _1117);
        }
        else
        {
            _1120 = _1109;
        }
        highp vec3 _1167;
        SPIRV_CROSS_BRANCH
        if (_1120 > 0.0)
        {
            float _355 = mix(1.0, dot(_733, _1088), dot(_1088, vec4(1.0)));
            highp float _1128 = max(0.0, dot(_152, normalize(_584 + _1092)));
            highp vec4 _1130 = textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _883, 0.0);
            float _365 = _1130.z;
            highp float _1133 = max(clamp(_691 * (_1130.x * 2.0), 0.0, 1.0), 0.0199999995529651641845703125);
            float _369 = clamp(_691 * (_1130.y * 2.0), 0.0, 1.0);
            float _356 = mix(_1133, _369, _365);
            float _357 = dot(_152, _1092);
            highp vec3 _1145 = vec3(1.0) * max(0.0, dot(_152, _1092));
            highp float _1150 = 1.0 - (_1128 * _1128);
            float _372 = _1133 * _1133;
            highp float _1151 = _1128 * _372;
            highp float _1153 = _372 / (_1150 + (_1151 * _1151));
            float _376 = _369 * _369;
            highp float _1154 = _1128 * _376;
            highp float _1156 = _376 / (_1150 + (_1154 * _1154));
            vec4 _388 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _356) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
            float _389 = _388.x;
            vec2 _397 = (vec2(-1.0400390625, 1.0400390625) * ((min(_389 * _389, _311) * _389) + _388.y)) + _388.zw;
            _1167 = (((mix(_1145 * _355, textureLod(SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler, vec3((max(_357 - (max(2.0 * _357, 0.4000000059604644775390625) * (1.0 - sqrt(_355))), -1.0) * 0.5) + 0.5, _697, _895), 0.0).xyz, textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, _904, 0.0).xyz) * _288) * 1.0) + ((_1145 * (((_233 * _397.x) + vec3(_302 * _397.y)) * (mix(min(_1153 * _1153, 2048.0), min(_1156 * _1156, 2048.0), _365) * ((_356 * 0.25) + 0.25)))) * 1.0)) * ((_1049.xyz * _1120) * _355);
        }
        else
        {
            _1167 = vec3(0.0);
        }
        _1034 = _1033 + _1167;
    }
    vec3 _79 = _1033 * 1.0;
    vec4 _400 = vec4(_79.x, _79.y, _79.z, _538.w);
    _400.w = 0.0;
    highp vec3 _1170 = min((_400.xyz * View_PreExposure).xyz, vec3(32512.0, 32512.0, 32256.0));
    out_var_SV_Target0 = vec4(_1170.x, _1170.y, _1170.z, _400.w);
    out_var_SV_Target1 = gl_FragCoord.z;
}

